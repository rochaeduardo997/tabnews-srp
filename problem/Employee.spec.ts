import Employee from "./Employee";

test("instance", () => {
  const employee = new Employee("id", 10, 10);
  expect(employee.payment).toBe(100);
});
