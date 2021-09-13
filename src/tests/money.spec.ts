import { Currency } from '../Currency';
import { Money } from '../Money';

test('Create 100 Euro', () => {
  const onehundredEuro = Money.fromAmountAndCurrency(
    10000,
    new Currency('EUR')
  );
  expect(onehundredEuro.toString()).toBe('100.00€');
});

test('100€ + 50€ = 150€', () => {
  const onehundredEuro = Money.fromAmountAndCurrency(
    10000,
    new Currency('EUR')
  );
  const fiftyEuro = Money.fromAmountAndCurrency(5000, new Currency('EUR'));
  const onehundredFiftyEuro = onehundredEuro.add(fiftyEuro);
  expect(onehundredFiftyEuro.toString()).toBe('150.00€');
});
