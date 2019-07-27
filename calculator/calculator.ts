{
  class Calculator {
    public calculator: HTMLDivElement
    public calculatorResult: HTMLSpanElement
    public n1;
    public operator;
    public n2;
    private buttonOptions: Array<Array<string>> = [
      ["Clear", "÷"],
      ["7", "8", "9", "×"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "="]
    ];
    constructor() {
      this.init()

    }
    init() {
      this.createContainer()
      this.createScreen()
      this.createButons()
      this.bindEvents()
      this.initStatus()
    }

    initStatus() {
      this.n1 = "";
      this.n2 = "";
      this.operator = "";
      this.calculatorResult.textContent = "0";
    }

    createElement(
      text: string,
      target: HTMLElement,
      className: string
    ): void {
      let button: HTMLButtonElement = document.createElement("button");
      button.textContent = text;
      button.className = className;
      target.appendChild(button);
    }

    createContainer() {
      let calculator: HTMLDivElement = document.createElement("div");
      calculator.className = "calculator";
      document.body.appendChild(calculator);
      this.calculator = calculator
    }

    createScreen() {
      let screen: HTMLDivElement = document.createElement("div");
      let calculatorResult: HTMLSpanElement = document.createElement("span");
      screen.className = "screen";
      screen.appendChild(calculatorResult);
      this.calculatorResult = calculatorResult
      this.calculator.appendChild(screen);
    }

    createButons() {
      this.buttonOptions.forEach((value: Array<string>) => {
        let div: HTMLDivElement = document.createElement("div");
        div.className = "row";
        value.forEach((v: string) => {
          this.createElement(v, div, `b-${v}`);
        });
        this.calculator.appendChild(div);
      });
    }

    updateResult() {
      if (this.n1 && this.n2) {
        let result: number;
        if (this.operator === "+") {
          result = parseFloat(this.n1) + parseFloat(this.n2);
        } else if (this.operator === "-") {
          result = parseFloat(this.n1) - parseFloat(this.n2);
        } else if (this.operator === "×") {
          result = parseFloat(this.n1) * parseFloat(this.n2);
        } else if (this.operator === "÷") {
          result = parseFloat(this.n1) / parseFloat(this.n2);
        }
        this.calculatorResult.textContent = result.toString();
        this.n1 = result.toString();
        this.n2 = "";
        this.operator = "";
      } else {
        return
      }
    }

    updateN(button: HTMLButtonElement) {
      if (this.operator) {
        this.n2 = this.n2 ? this.n2 + button.textContent : button.textContent;
        this.calculatorResult.textContent = this.n2;
      } else {
        this.n1 = this.n1 ? this.n1 + button.textContent : button.textContent;
        this.calculatorResult.textContent = this.n1;
      }
    }

    bindEvents() {
      this.calculator.addEventListener("click", event => {
        if (event.target instanceof HTMLButtonElement) {
          let button: HTMLButtonElement = event.target;
          if ("0123456789.".indexOf(button.textContent) >= 0) {
            this.updateN(button)
          } else if ("+-×÷".indexOf(button.textContent) >= 0) {
            if (!this.n1) {
              return
            }
            if (this.operator) {
              this.updateResult()
            } else {
              this.operator = button.textContent;
            }
          } else if (button.textContent === "=") {
            this.updateResult()
          } else {
            this.initStatus()
          }
        }
      });
    }
  }
  new Calculator()
}
