export default abstract class EmployeeAbastract {
  constructor(
    protected id: string,
    protected hourPayment: number,
    protected workedHours: number,
  ) {}

  get payment(): number {
    return this.calculatePayment();
  }

  protected calculatePayment() {
    return this.hourPayment * this.workedHours;
  }
}
