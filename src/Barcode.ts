import { PosError } from './PosError';

export class Barcode {
  private constructor(readonly barcode: string) {}

  public static fromBarcode(barcode: string): Barcode {
    if (barcode == '') throw new PosError('Invalid Barcode');
    else return new Barcode(barcode);
  }
}
