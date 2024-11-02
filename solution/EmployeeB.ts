import EmployeeAbastract from "./Employee.abstract";

export enum EmployeeRiskLevel {
  LOW = 10,
  MEDIUM = 20,
  HIGH = 40,
}
export default class EmployeeB extends EmployeeAbastract {
  constructor(
    id: string,
    hourPayment: number,
    workedHours: number,
    private riskLevel: EmployeeRiskLevel,
  ) {
    super(id, hourPayment, workedHours);
  }

  protected calculatePayment() {
    const riskLevelInDecimal = this.riskLevel / 100;
    const basePayment = this.hourPayment * this.workedHours;
    const additional = basePayment * riskLevelInDecimal;
    return basePayment + additional;
  }
}
