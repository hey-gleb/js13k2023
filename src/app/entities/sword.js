import { GameObject } from "./gameObject";

export class Sword extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.className = "collidable";
    this.el.setAttribute("position", {
      x: -2,
      z: -0.5,
    });
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      height: 0.9,
      radius: 0.02,
    });
  }
}
