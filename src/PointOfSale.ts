import { IDisplay } from './display';

export class PointOfSale {
  public barcode!: string;

  constructor(private display: IDisplay) {}

  public onBarcode(barcode: string): void {
    this.display.show(barcode);
  }
}
