export class PointOfSale {
  public barcode!: string;

  public onBarcode(barcode: string): void {
    this.barcode = barcode;
  }
}
