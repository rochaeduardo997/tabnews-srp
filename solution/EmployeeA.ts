import EmployeeAbastract from "./Employee.abstract";

export default class EmployeeA extends EmployeeAbastract {
  constructor(id: string, hourPayment: number, workedHours: number) {
    super(id, hourPayment, workedHours);
  }
}
