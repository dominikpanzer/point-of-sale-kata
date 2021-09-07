import { Display } from '../display';
import { PointOfSale } from '../PointOfSale';
test('POS can receive a barcode', () => {
  const display = new Display();
  const pointOfSale = new PointOfSale(display);

  pointOfSale.onBarcode('12345');
  expect(display.getDisplayText()).toBe('12345');
});
