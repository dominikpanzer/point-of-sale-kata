import { Currency } from './Currency';
import { PosError } from './PosError';
import deepEqual from 'deep-equal';

export class Money {
  private constructor(
    readonly amountInCents: number,
    readonly currency: Currency
  ) {
    if (!Number.isInteger(amountInCents))
      throw new PosError('Please provide the amount in cents');
  }

  public static fromAmountAndCurrency(
    amountInCents: number,
    currency: Currency
  ): Money {
    return new Money(amountInCents, currency);
  }

  add(that: Money): Money {
    if (!deepEqual(this.currency, that.currency))
      throw new PosError("Can't add different currencies");

    return new Money(this.amountInCents + that.amountInCents, this.currency);
  }

  toString(): string {
    return (this.amountInCents / 100).toFixed(2) + this.currency.currencySymbol;
  }
}
