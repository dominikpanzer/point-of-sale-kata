import { PointOfSale } from '../PointOfSale';
import { Display } from '../Display';
test('Display can show the barcode', () => {
  const display = new Display();
  const pointOfSale = new PointOfSale(display);

  pointOfSale.onBarcode('12345');

  expect(display.getDisplayText()).toBe('12345');
});
