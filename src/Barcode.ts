export class Barcode {
  private constructor(readonly barcode: string) {}

  public static fromBarcode(barcode: string): Barcode {
    if (barcode == '') throw new Error('Invalid Barcode');
    else return new Barcode(barcode);
  }
}
