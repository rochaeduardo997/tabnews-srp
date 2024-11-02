import EmployeeA from "./EmployeeA";
import EmployeeB, { EmployeeRiskLevel } from "./EmployeeB";

test("instance basic employee", () => {
  const employeeA = new EmployeeA("id", 10, 10);
  expect(employeeA.payment).toBe(100);
});

test.each([
  EmployeeRiskLevel.LOW,
  EmployeeRiskLevel.MEDIUM,
  EmployeeRiskLevel.HIGH,
])("instance employee with additional", (riskLevel) => {
  const employeeB = new EmployeeB("id", 10, 10, riskLevel);
  const basePayment = 100;
  const expected = basePayment + basePayment * (riskLevel / 100);
  expect(employeeB.payment).toBe(expected);
});
