#!/usr/bin/env ts-node
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.children = [];
        }
        Person.prototype.addChild = function (child) {
            this.children.push(child);
        };
        Person.prototype.introduceFamliy = function (n) {
            n = !n ? 0 : n;
            console.log("----".repeat(n) + this.name);
            this.children.forEach(function (child) {
                child.introduceFamliy(n + 1);
            });
        };
        Person.prototype.sayHi = function () {
            console.log("大家好，我是" + this.name);
        };
        return Person;
    }());
    var p1 = new Person("张三");
    var p12 = new Person("张小三");
    var p13 = new Person("张小1三");
    var p121 = new Person("张小11三");
    p1.addChild(p12);
    p1.addChild(p13);
    p12.addChild(p121);
    p1.introduceFamliy();
}
