import { Display } from '../display';
import { PointOfSale } from '../PointOfSale';
import { inMemoryPriceDatabase } from '../PriceDataBase';
test('POS can receive a barcode', () => {
  checkForDisplayValue('063491028120', '063491028120');
});

test('Barcode shows error for invalid barcode', () => {
  checkForDisplayValue('', 'Invalid Barcode');
});

test('Barcode can be found in the price database, show price in display', () => {
  checkForDisplayValue('12345', '666,00€');
});
function checkForDisplayValue(barcode: string, displayText: string) {
  const display = new Display();
  const priceDataBase = new inMemoryPriceDatabase();
  const pointOfSale = new PointOfSale(display, priceDataBase);

  pointOfSale.onBarcode(barcode);
  expect(display.getDisplayText()).toBe(displayText);
}
