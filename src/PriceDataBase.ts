export interface IPriceDatabase {
  getPriceForProductbyBarcode(barcode: string): string | undefined;
}

export class inMemoryPriceDatabase implements IPriceDatabase {
  private priceCatalog = new Map([
    ['12345', '666,00€'],
    ['063491028120', '063491028120']
  ]);

  getPriceForProductbyBarcode(barcode: string): string | undefined {
    if (this.priceCatalog.has(barcode)) {
      return this.priceCatalog.get(barcode);
    }
  }
}
