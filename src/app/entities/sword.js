import { GameObject } from "./gameObject";

export class Sword extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    //TODO create interface for it
    this.el.className = "collidable";
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      height: 0.9,
      radius: 0.02,
    });
    const swordGuard = document.createElement("a-entity");
    swordGuard.setAttribute("geometry", {
      primitive: "cylinder",
      radius: 0.01,
      height: 0.3,
    });
    swordGuard.setAttribute("rotation", {
      x: 90,
    });
    swordGuard.setAttribute("position", {
      y: -0.25,
    });
    this.el.appendChild(swordGuard);
  }
}
