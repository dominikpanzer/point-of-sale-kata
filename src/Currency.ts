import { PosError } from "./PosError";

export class Currency{
readonly currencySymbol: string;
    constructor( readonly currency: string) {   
        if (this.currency != 'EUR')
      throw new PosError("Unknown Currency")    
      this.currencySymbol = "€"
    }
}