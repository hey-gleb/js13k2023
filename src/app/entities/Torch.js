export class Torch {
  constructor(x, y, z, props) {
    this.el = document.createElement("a-entity");
    this.el.setAttribute("position", {
      x,
      y,
      z,
    });
    this.el.setAttribute("light", {
      color: "#fcff38",
      type: "point",
      intensity: 0.6,
    });
  }
}
