import { Barcode } from './Barcode';

export interface IPriceDatabase {
  getPriceForProductByBarcode(barcode: Barcode): string;
}

export class inMemoryPriceDatabase implements IPriceDatabase {
  private priceCatalog = new Map([
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

    if (price != '') {
      return price;
    } else {
      throw new Error('Product not found');
    }
  }
}
