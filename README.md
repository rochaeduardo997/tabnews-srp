Descrição histórica:
- Um módulo deve ter uma, e apenas uma, razão para mudar.
- Um módulo deve ser responsável por um, e apenas um, ator.

Problema:
Imagine a classe Employee que calcula o salário do funcionário comum com base nas horas trabalhadas:
```ts
class Employee {
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
```
Agora imagine o caso do funcionário que recebe adicional de insalubridade. Como obrigatoriamente tem o cálculo do adicional, teríamos de modificar a classe existente para que aceitasse o cálculo - mudando assim o foco da classe base - e agora ela atenderia a dois atores diferentes: o funcionário comum e o que recebe o adicional.

Solução:
Manter a estrutura do funcionário comum como uma classe abstrata e criar duas novas classes para representar o funcionário comum e outra que receba os adicionais de insalubridade.
```ts
abstract class EmployeeAbastract {
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

class EmployeeA extends EmployeeAbastract {
  constructor(id: string, hourPayment: number, workedHours: number) {
    super(id, hourPayment, workedHours);
  }
}

enum EmployeeRiskLevel {
  LOW = 10,
  MEDIUM = 20,
  HIGH = 40,
}
class EmployeeB extends EmployeeAbastract {
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
```
A classe do funcionário básico manteve-se inalterada quanto às implementações da classe abstrata, já a classe que recebe os adicionais de insalubridade, houve o *method overriding* para modificar o comportamento da função de cálculo do pagamento e entregar o valor atualizado com os adicionais.

Conclusão:
Trata-se da possibilidade de modificação de uma classe/módulo sem que interfira no funcionamento geral ou de outras que utilizem métodos compartilhados.
No exemplo de solução, pode-se modificar ambas as classes livremente que uma não interferirá no funcionamento da outra, bem como caso haja a necessidade de adicionar/modificar um comportamento comum, basta faze-lo na classe abstrata que ambas irão compartilhar a adição/modificação.

Referências:
- MARTIN, Robert C. **Arquitetura Limpa**: O Guia do Artesão para Estrutura e Design de Software. Rio de Janeiro: Alta Books, 2019.
