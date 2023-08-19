import { GameObject } from "./gameObject";

export class GateSwitch extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.className = "trigger";
    this.el.setAttribute("geometry", {
      primitive: "box",
      height: 0.3,
      width: 0.3,
      depth: 0.3,
    });
  }
}
