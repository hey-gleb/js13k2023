import { GameObject } from "./gameObject";

export class Shield extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.className = "collidable";
    this.el.setAttribute("geometry", {
      primitive: "circle",
      height: 0.9,
      radius: 0.35,
    });
    this.el.setAttribute("material", {
      side: "double",
    });
  }
}
