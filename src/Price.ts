import { Currency } from "./Currency";
import { PosError } from "./PosError";

export class Price {
    constructor( readonly amountInCents: number, readonly currency: Currency) {
        if (!Number.isInteger(amountInCents))
        throw new PosError("Please provide the amount in cents")
    }

    toString():string {
        return (this.amountInCents/100).toFixed(2) + this.currency.currencySymbol;
    }
}