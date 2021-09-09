export class PosError extends Error {
  constructor(readonly message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = PosError.name; // stack traces display correctly now
  }
}
