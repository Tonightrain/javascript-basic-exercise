import { version } from 'acorn';

export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  // 此类表示二维向量。 请按照
  // 以下说明：
  // *我们应该能够得到向量的x部分和y部分。
  // *我们应该能够计算2个向量的正负。
  // *我们应该能够计算向量的距离。


  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'x', {
      writable: false,
      value: x,
    });
    Object.defineProperty(this, 'y', {
      writable: false,
      value: y,
    });
  }

  static plus(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static minus(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  // eslint-disable-next-line class-methods-use-this
  distance() {
    const number = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    return number;
  }
}
