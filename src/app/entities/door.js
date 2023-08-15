/**
 * TODO
 * Add canvas texture
 * Round edges
 * */
import { GameObject } from "./gameObject";

export class Door extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.setAttribute("id", "door");
    this.el.setAttribute("geometry", {
      primitive: "plane",
      height: 2.5,
      width: 1.4,
    });
    this.el.setAttribute("material", {
      color: "#000000",
    });
  }
}
