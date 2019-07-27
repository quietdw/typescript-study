#!/usr/bin/env ts-node
{
  const a: number = parseInt(process.argv[2]);
  const b: number = parseInt(process.argv[3]);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("输入不合法");
    process.exit(1);
  }

  console.log(a - b);
  process.exit(0);
}
