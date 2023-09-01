import { GameObject } from "./gameObject";

export class ArmoryObject extends GameObject {
  constructor(parentId, x, y, z) {
    super(x, y, z);
    this.el.className = "collidable";
    this.el.setAttribute("carriable", {
      parentId,
    });
  }
}
