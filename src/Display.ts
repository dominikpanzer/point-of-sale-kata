export interface IDisplay {
  show(text: string): void;
  getDisplayText(): string;
}

export class Display implements IDisplay {
  private displayText!: string;

  public show(text: string): void {
    this.displayText = text;
  }

  public getDisplayText(): string {
    return this.displayText;
  }
}
