/*
 * index.ts
 *
 * Copyright (c) 2024 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/exact-round
 */

export const round = (number: number, precision = 0) => {
  if (precision === 0) {
    return Math.round(number);
  }

  const factor = Math.pow(10, precision);
  const value = number * factor;
  const rounded = Math.round(value);

  return Math.abs(value - rounded) === 0.5
    ? (Math.round(value / 2) * 2) / factor
    : rounded / factor;
};

export const roundUp = (number: number, precision = 0) => {
  if (precision === 0) {
    return Math.ceil(Math.round(number * 10) / 10);
  }

  const factor = Math.pow(10, precision);
  return Math.ceil(Math.round(number * factor * 10) / 10) / factor;
};

export const roundDown = (number: number, precision = 0) => {
  if (precision === 0) {
    return Math.floor(Math.round(number * 10) / 10);
  }

  const factor = Math.pow(10, precision);
  return Math.floor(Math.round(number * factor * 10) / 10) / factor;
};

export default Object.assign(round, { up: roundUp, down: roundDown });
