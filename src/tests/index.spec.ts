import { Display } from '../display';
import { PointOfSale } from '../PointOfSale';
test('POS can receive a barcode', () => {
  const display = new Display();
  const pointOfSale = new PointOfSale(display);

  pointOfSale.onBarcode('063491028120');
  expect(display.getDisplayText()).toBe('063491028120');
});

test('Barcode shows error for invalid barcode', () => {
  const display = new Display();
  const pointOfSale = new PointOfSale(display);

  pointOfSale.onBarcode('');
  expect(display.getDisplayText()).toBe('Invalid Barcode');
});
