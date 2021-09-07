import { PointOfSale } from '../PointOfSale';
test('POS can receive a barcode', () => {
  const pointOfSale = new PointOfSale();

  pointOfSale.onBarcode('12345');
  expect(pointOfSale.barcode).toBe('12345');
});
