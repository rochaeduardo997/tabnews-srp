export default class Employee {
  constructor(
    private id: string,
    private hourPayment: number,
    private workedHours: number,
  ) {}

  get payment(): number {
    return this.calculatePayment();
  }

  private calculatePayment() {
    return this.hourPayment * this.workedHours;
  }
}
