import { GameObject } from "./gameObject";

export class ArmorySpawn extends GameObject {
  constructor(x, y, z, { id }) {
    super(x, y, z);
    this.el.setAttribute("id", id);
    this.el.setAttribute("armory-spawn-spot", "");
  }
}
