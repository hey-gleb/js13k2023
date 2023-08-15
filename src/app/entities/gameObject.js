export class GameObject {
  constructor(x = 0, y = 0, z = 0) {
    this.el = document.createElement("a-entity");
    this.el.setAttribute("position", {
      x,
      y,
      z,
    });
  }
}
