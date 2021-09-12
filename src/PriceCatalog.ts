import { Barcode } from './Barcode';
import { Currency } from './Currency';
import { PosError } from './PosError';
import { Price } from './Price';

export interface IPriceCatalog {
  getPriceForProductByBarcode(barcode: Barcode): Price;
}

export class inMemoryPriceCatalog implements IPriceCatalog {
  private priceCatalog = new Map<Barcode, Price>([
    [Barcode.fromBarcode('12345'), new Price(66600, new Currency('EUR'))],
    [Barcode.fromBarcode('063491028120'), new Price(55500, new Currency('EUR'))],
  ]);

  getPriceForProductByBarcode(barcode: Barcode): Price {
    let price: Price | undefined = undefined
    this.priceCatalog.forEach(
      (priceOfBarcode: Price, barcodeFromCatalog: Barcode) => {
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
