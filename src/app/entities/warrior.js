import { GameObject } from "./gameObject";

export class Warrior extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.setAttribute("id", "warrior");
    this.el.setAttribute("geometry", {
      primitive: "box",
    });
    this.el.setAttribute("material", "");
  }
}
