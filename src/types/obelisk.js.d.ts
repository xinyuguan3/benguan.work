declare module 'obelisk.js' {
  export class Point {
    constructor(x: number, y: number);
  }

  export class Point3D {
    constructor(x: number, y: number, z: number);
  }

  export class CubeDimension {
    constructor(xAxis: number, yAxis: number, zAxis: number);
  }

  export class CubeColor {
    constructor();
    getByHorizontalColor(color: number): CubeColor;
  }

  export class Cube {
    constructor(dimension: CubeDimension, color: CubeColor, border?: boolean);
  }

  export class PixelView {
    constructor(canvas: HTMLCanvasElement, point: Point);
    renderObject(obj: Cube, point: Point | Point3D): void;
  }
} 