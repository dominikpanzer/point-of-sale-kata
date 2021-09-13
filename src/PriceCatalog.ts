import { Barcode } from './Barcode';
import { Currency } from './Currency';
import { PosError } from './PosError';
import { Money } from './Money';

export interface IPriceCatalog {
  getPriceForProductByBarcode(barcode: Barcode): Money;
}

export class inMemoryPriceCatalog implements IPriceCatalog {
  private priceCatalog = new Map<Barcode, Money>([
    [Barcode.fromBarcode('12345'), Money.fromAmountAndCurrency(66600, new Currency('EUR'))],
    [Barcode.fromBarcode('063491028120'), Money.fromAmountAndCurrency(55500, new Currency('EUR'))]
  ]);

  getPriceForProductByBarcode(barcode: Barcode): Money {
    let price: Money | undefined = undefined;
    this.priceCatalog.forEach(
      (priceOfBarcode: Money, barcodeFromCatalog: Barcode) => {
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
