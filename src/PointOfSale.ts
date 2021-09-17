import { Barcode } from './Barcode';
import { PosError } from './PosError';
import { IDisplay } from './Display';
import { IPriceCatalog } from './PriceCatalog';
import { Money } from './Money';
import { Currency } from './Currency';

export class PointOfSale {
  private totals: Money;

  checkout(): void {
    this.display.show('Totals: ' + this.totals.toString());
  }

  addItemWorth(amount: number, currency: string): void {
    try {
      const additionalItem = Money.fromAmountAndCurrency(
        amount,
        new Currency(currency)
      );
      this.display.show(additionalItem.toString());
      this.totals = this.totals.add(additionalItem);
    } catch (error) {
      if (error instanceof PosError) this.display.show(error.message);
      else this.display.show('Undefined Error');
    }
  }

  constructor(private display: IDisplay, private priceCatalog: IPriceCatalog) {
    this.totals = Money.fromAmountAndCurrency(0, new Currency('EUR'));
  }

  public onBarcode(barcodeString: string): void {
    try {
      const barcode = Barcode.fromBarcode(barcodeString);
      const price = this.priceCatalog.lookupPriceBy(barcode);
      this.totals = this.totals.add(price);
      this.display.show(price.toString());
    } catch (error) {
      if (error instanceof PosError) this.display.show(error.message);
      else this.display.show('Undefined Error');
    }
  }
}
