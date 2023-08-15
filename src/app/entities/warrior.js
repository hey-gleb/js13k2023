export class Warrior {
  constructor(x, y, z, props) {
    this.el = document.createElement("a-entity");
    this.el.setAttribute("warrior");
    this.el.setAttribute("position", "0 0 -2");
    this.el.setAttribute("geometry", {
      primitive: "box",
    });
    this.el.setAttribute("material", "");
  }
}
