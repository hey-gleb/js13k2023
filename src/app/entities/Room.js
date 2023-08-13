import { Torch } from "./Torch";

export class Room {
  constructor(x, y, z, props) {
    this.el = document.createElement("a-entity");

    const torch1 = new Torch(0.5, 0.5, -2);
    const torch2 = new Torch(0.5, 0.5, 2);
    this.el.appendChild(torch1.el);
    this.el.appendChild(torch2.el);

    this.el.setAttribute("id", "room");
    this.el.setAttribute("position", {
      x,
      y,
      z,
    });
    this.el.setAttribute("geometry", {
      primitive: "box",
      width: props.width || 1,
      height: props.height || 1,
      depth: props.depth || 1,
    });
    this.el.setAttribute("material", {
      side: "double",
      color: "#878787",
    });
  }
}
