import { ArmoryObject } from "../armoryObject";

export class Shield extends ArmoryObject {
  constructor(parentId, x, y, z, props) {
    super(parentId, x, y, z);
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
