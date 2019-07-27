{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.buttonOptions = [
                ["Clear", "÷"],
                ["7", "8", "9", "×"],
                ["4", "5", "6", "-"],
                ["1", "2", "3", "+"],
                ["0", ".", "="]
            ];
            this.init();
        }
        Calculator.prototype.init = function () {
            this.createContainer();
            this.createScreen();
            this.createButons();
            this.bindEvents();
            this.initStatus();
        };
        Calculator.prototype.initStatus = function () {
            this.n1 = "";
            this.n2 = "";
            this.operator = "";
            this.calculatorResult.textContent = "0";
        };
        Calculator.prototype.createElement = function (text, target, className) {
            var button = document.createElement("button");
            button.textContent = text;
            button.className = className;
            target.appendChild(button);
        };
        Calculator.prototype.createContainer = function () {
            var calculator = document.createElement("div");
            calculator.className = "calculator";
            document.body.appendChild(calculator);
            this.calculator = calculator;
        };
        Calculator.prototype.createScreen = function () {
            var screen = document.createElement("div");
            var calculatorResult = document.createElement("span");
            screen.className = "screen";
            screen.appendChild(calculatorResult);
            this.calculatorResult = calculatorResult;
            this.calculator.appendChild(screen);
        };
        Calculator.prototype.createButons = function () {
            var _this = this;
            this.buttonOptions.forEach(function (value) {
                var div = document.createElement("div");
                div.className = "row";
                value.forEach(function (v) {
                    _this.createElement(v, div, "b-" + v);
                });
                _this.calculator.appendChild(div);
            });
        };
        Calculator.prototype.updateResult = function () {
            if (this.n1 && this.n2) {
                var result = void 0;
                if (this.operator === "+") {
                    result = parseFloat(this.n1) + parseFloat(this.n2);
                }
                else if (this.operator === "-") {
                    result = parseFloat(this.n1) - parseFloat(this.n2);
                }
                else if (this.operator === "×") {
                    result = parseFloat(this.n1) * parseFloat(this.n2);
                }
                else if (this.operator === "÷") {
                    result = parseFloat(this.n1) / parseFloat(this.n2);
                }
                this.calculatorResult.textContent = result.toString();
                this.n1 = result.toString();
                this.n2 = "";
                this.operator = "";
            }
            else {
                return;
            }
        };
        Calculator.prototype.updateN = function (button) {
            if (this.operator) {
                this.n2 = this.n2 ? this.n2 + button.textContent : button.textContent;
                this.calculatorResult.textContent = this.n2;
            }
            else {
                this.n1 = this.n1 ? this.n1 + button.textContent : button.textContent;
                this.calculatorResult.textContent = this.n1;
            }
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.calculator.addEventListener("click", function (event) {
                if (event.target instanceof HTMLButtonElement) {
                    var button = event.target;
                    if ("0123456789.".indexOf(button.textContent) >= 0) {
                        _this.updateN(button);
                    }
                    else if ("+-×÷".indexOf(button.textContent) >= 0) {
                        if (!_this.n1) {
                            return;
                        }
                        if (_this.operator) {
                            _this.updateResult();
                        }
                        else {
                            _this.operator = button.textContent;
                        }
                    }
                    else if (button.textContent === "=") {
                        _this.updateResult();
                    }
                    else {
                        _this.initStatus();
                    }
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
