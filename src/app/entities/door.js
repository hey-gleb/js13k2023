/**
 * TODO
 * Add canvas texture
 * Round edges
 * */
export class Door {
  constructor(x,y,z, props) {
    this.el = document.createElement("a-entity");
    this.el.setAttribute("id", "door")
    this.el.setAttribute("position", {
      x: -0.5,
      y: -0.3,
      z: -2.499
    })
    this.el.setAttribute("geometry", {
      primitive: "plane",
      height: 2,
    });
    this.el.setAttribute("material", {
      color: "#000000"
    })

  }
}
