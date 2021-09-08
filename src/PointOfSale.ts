import { IDisplay } from './display';
import { IPriceDatabase } from './PriceDataBase';

export class PointOfSale {
  public barcode!: string;

  constructor(
    private display: IDisplay,
    private priceDataBase: IPriceDatabase
  ) {}

  public onBarcode(barcode: string): void {
    let price = '';
    if (barcode == '') {
      this.display.show('Invalid Barcode');
      return;
    }
    try {
      price = this.priceDataBase.getPriceForProductByBarcode(barcode);
    } catch (Error) {
      this.display.show('Item not found');
      return;
    }
    this.display.show(price);
  }
}
