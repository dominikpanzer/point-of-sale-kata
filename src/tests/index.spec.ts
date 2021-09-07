import { Rechner } from '../index';

test('Erzeugen und 5 addieren', () => {
  // Arrange
  const rechner = new Rechner(5);

  // Act
  const ergebnis = rechner.addiereZurBasis(5);

  // Assert
  expect(ergebnis).toBe(10);
});
