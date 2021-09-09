import { Barcode } from './Barcode';
import { IDisplay } from './Display';
import { IPriceCatalog } from './PriceCatalog';

export class PointOfSale {
  constructor(private display: IDisplay, private priceCatalog: IPriceCatalog) {}

  public onBarcode(barcodeString: string): void {
    let price = '';
    let barcode: Barcode;
    try {
      barcode = Barcode.fromBarcode(barcodeString);
    } catch (Error) {
      this.display.show('Invalid Barcode');
      return;
    }
    try {
      price = this.priceCatalog.getPriceForProductByBarcode(barcode);
    } catch (Error) {
      this.display.show('Item not found');
      return;
    }
    this.display.show(price);
  }
}
