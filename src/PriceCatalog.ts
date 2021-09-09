import { Barcode } from './Barcode';
import { PosError } from './PosError';

export interface IPriceCatalog {
  getPriceForProductByBarcode(barcode: Barcode): string;
}

export class inMemoryPriceCatalog implements IPriceCatalog {
  private priceCatalog = new Map<Barcode, string>([
    [Barcode.fromBarcode('12345'), '666,00€'],
    [Barcode.fromBarcode('063491028120'), '063491028120']
  ]);

  getPriceForProductByBarcode(barcode: Barcode): string {
    let price = '';
    this.priceCatalog.forEach(
      (priceOfBarcode: string, barcodeFromCatalog: Barcode) => {
        if (barcodeFromCatalog.barcode == barcode.barcode)
          price = priceOfBarcode;
      }
    );

    if (price) {
      return price;
    } else {
      throw new PosError('Item not found');
    }
  }
}
