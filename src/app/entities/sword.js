export class Sword {
  constructor(x, y, z, props) {
    this.el = document.createElement("a-entity");
    this.el.className = '.collidable'
    this.el.setAttribute("position", {
      z: -0.5
    });
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      height: 0.9,
      radius: 0.02
    })
  }
}
