import { Barcode } from './Barcode';
import { PosError } from './PosError';
import { IDisplay } from './Display';
import { IPriceCatalog } from './PriceCatalog';

export class PointOfSale {
  constructor(private display: IDisplay, private priceCatalog: IPriceCatalog) {}

  public onBarcode(barcodeString: string): void {
    try {
      const barcode = Barcode.fromBarcode(barcodeString);
      const price = this.priceCatalog.getPriceForProductByBarcode(barcode);
      this.display.show(price.toString());
    } catch (error) {
      if (error instanceof PosError) this.display.show(error.message);
      else this.display.show("Undefined Error")
    }
  }
}
