import { IDisplay } from './display';
import { IPriceDatabase } from './PriceDataBase';

export class PointOfSale {
  public barcode!: string;

  constructor(
    private display: IDisplay,
    private priceDataBase: IPriceDatabase
  ) {}

  public onBarcode(barcode: string): void {
    if (barcode == '') {
      this.display.show('Invalid Barcode');
    } else {
      let price = this.priceDataBase.getPriceForProductbyBarcode(barcode);
      if (price == undefined) price = 'Item not found';
      this.display.show(price);
    }
  }
}
