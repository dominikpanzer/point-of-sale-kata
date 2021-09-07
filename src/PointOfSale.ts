import { IDisplay } from './display';

export class PointOfSale {
  public barcode!: string;

  constructor(private display: IDisplay) {}

  public onBarcode(barcode: string): void {
    if (barcode == '') {
      this.display.show('Invalid Barcode');
    } else {
      this.display.show(barcode);
    }
  }
}
