/*
 * index.test.ts
 *
 * Copyright (c) 2024 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/exact-round
 */

import round from "./index.js";

console.log(round(0.1 + 0.2, 1));
console.log(round((0.1 + 0.2) * 10));
console.log(round(0.1 + 0.21, 1));
console.log(round(0.1 + 0.7, 1));
console.log(round((0.1 + 0.7) * 10));
console.log(round(-0.1 - 0.2, 1));
console.log(round((-0.1 - 0.2) * 10));
console.log(round(-0.1 - 0.21, 1));
console.log(round(-0.1 - 0.7, 1));
console.log(round((-0.1 - 0.7) * 10));
console.log(round(0.125, 2));
console.log(round(0.135, 2));

console.log(round.up(0.1 + 0.2, 1));
console.log(round.up((0.1 + 0.2) * 10));
console.log(round.up(0.1 + 0.21, 1));
console.log(round.up(0.1 + 0.7, 1));
console.log(round.up((0.1 + 0.7) * 10));
console.log(round.up(-0.1 - 0.2, 1));
console.log(round.up((-0.1 - 0.2) * 10));
console.log(round.up(-0.1 - 0.21, 1));
console.log(round.up(-0.1 - 0.7, 1));
console.log(round.up((-0.1 - 0.7) * 10));

console.log(round.down(0.1 + 0.2, 1));
console.log(round.down((0.1 + 0.2) * 10));
console.log(round.down(0.1 + 0.21, 1));
console.log(round.down(0.1 + 0.7, 1));
console.log(round.down((0.1 + 0.7) * 10));
console.log(round.down(-0.1 - 0.2, 1));
console.log(round.down((-0.1 - 0.2) * 10));
console.log(round.down(-0.1 - 0.21, 1));
console.log(round.down(-0.1 - 0.7, 1));
console.log(round.down((-0.1 - 0.7) * 10));
