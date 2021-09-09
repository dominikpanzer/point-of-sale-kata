import { Display } from '../display';
import { PointOfSale } from '../PointOfSale';
import { inMemoryPriceCatalog } from '../PriceCatalog';
test('POS can receive a barcode', () => {
  checkForDisplayValue('063491028120', '063491028120');
});

test('Barcode shows error for invalid barcode', () => {
  checkForDisplayValue('', 'Invalid Barcode');
});

test('Barcode can be found in the price database, show price in display', () => {
  checkForDisplayValue('12345', '666,00€');
});

test('Barcode can not be found in the price database, show error in display', () => {
  checkForDisplayValue('5353563', 'Item not found');
});

function checkForDisplayValue(barcode: string, displayText: string) {
  const display = new Display();
  const priceCatalog = new inMemoryPriceCatalog();
  const pointOfSale = new PointOfSale(display, priceCatalog);

  pointOfSale.onBarcode(barcode);
  expect(display.getDisplayText()).toBe(displayText);
}
