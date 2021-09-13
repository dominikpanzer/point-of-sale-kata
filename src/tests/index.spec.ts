import { Display } from '../display';
import { PointOfSale } from '../PointOfSale';
import { inMemoryPriceCatalog } from '../PriceCatalog';

let pointOfSale: PointOfSale;
let display: Display;

beforeEach(() => {
  display = new Display();
  const priceCatalog = new inMemoryPriceCatalog();
  pointOfSale = new PointOfSale(display, priceCatalog);
});

function scanSingleCodeAndCheckForDisplayText(
  barcode: string,
  displayText: string
) {
  pointOfSale.onBarcode(barcode);
  expect(display.getDisplayText()).toBe(displayText);
}

test('POS can receive a barcode', () => {
  scanSingleCodeAndCheckForDisplayText('063491028120', '555.00€');
});

test('Barcode shows error for invalid barcode', () => {
  scanSingleCodeAndCheckForDisplayText('', 'Invalid Barcode');
});

test('Barcode can be found in the price database, show price in display', () => {
  scanSingleCodeAndCheckForDisplayText('12345', '666.00€');
});

test('Barcode can not be found in the price database, show error in display', () => {
  scanSingleCodeAndCheckForDisplayText('5353563', 'Item not found');
});
