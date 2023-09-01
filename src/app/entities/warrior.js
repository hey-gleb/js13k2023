import { GameObject } from "./gameObject";

export class Warrior extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);

    this.el.setAttribute("id", "warrior");
    this.el.setAttribute("warrior", "");
    this.createBody();
  }

  createBody() {
    const head = document.createElement("a-entity");
    head.setAttribute("id", "head");
    head.setAttribute("position", {
      y: 0.5,
    });
    head.setAttribute("geometry", {
      primitive: "circle",
      radius: 0.3,
    });
    head.setAttribute("material", {
      side: "double",
      color: "black",
    });
    this.el.appendChild(head);
    const body = document.createElement("a-entity");
    body.setAttribute("id", "body");
    body.setAttribute("position", {
      y: -0.5,
    });
    body.setAttribute("geometry", {
      primitive: "circle",
      radius: 0.5,
    });
    body.setAttribute("material", {
      side: "double",
      color: "black",
    });
    this.el.appendChild(body);
  }
}
