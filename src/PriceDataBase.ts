export interface IPriceDatabase {
  getPriceForProductByBarcode(barcode: string): string;
}

export class inMemoryPriceDatabase implements IPriceDatabase {
  private priceCatalog = new Map([
    ['12345', '666,00€'],
    ['063491028120', '063491028120']
  ]);

  getPriceForProductByBarcode(barcode: string): string {
    const price = this.priceCatalog.get(barcode);

    if (price) {
      return price;
    } else {
      throw new Error('Product not found');
    }
  }
}
