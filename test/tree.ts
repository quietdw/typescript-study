#!/usr/bin/env ts-node
{
  class Person {
    public children: Person[] = [];
    constructor(public name: string) {}
    addChild(child: Person) {
      this.children.push(child);
    }
    introduceFamliy(n?: number): void {
      n = !n ? 0 : n;
      console.log("----".repeat(n) + this.name);
      this.children.forEach(child => {
        child.introduceFamliy(n + 1);
      });
    }
    sayHi(): void {
      console.log("大家好，我是" + this.name);
    }
  }

  let p1 = new Person("张三");
  let p12 = new Person("张小三");
  let p13 = new Person("张小1三");
  let p121 = new Person("张小11三");
  p1.addChild(p12);
  p1.addChild(p13);
  p12.addChild(p121);
  p1.introduceFamliy();
}
