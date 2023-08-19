import { GameObject } from "./gameObject";

const ARMORY_TABLE_WIDTH = 2;

export class ArmoryTable extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.setAttribute("id", "armoryTable");
    this.el.setAttribute("armory-table", "");
    this.el.setAttribute("geometry", {
      primitive: "box",
      width: ARMORY_TABLE_WIDTH,
    });
    this.el.setAttribute("material", "");
  }
}
