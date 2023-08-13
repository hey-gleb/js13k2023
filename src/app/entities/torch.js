/**
 * TODO
 * Add particles
 * Add torch handle
 * */
export class Torch {
  constructor(x, y, z, props) {
    this.el = document.createElement("a-entity");
    this.el.setAttribute("position", {
      x,
      y,
      z,
    });
    const torchHandle = document.createElement("a-entity");
    torchHandle.setAttribute("position", {
      z: -0.45
    })
    torchHandle.setAttribute("geometry", {
      primitive: "box",
      width: 0.05,
      depth: 0.05,
      height: 0.25
    })
    torchHandle.setAttribute("rotation", {
      x: 25
    });
    torchHandle.setAttribute("material", {
      color: "#a1a1a1"
    })
    this.el.appendChild(torchHandle);
    this.el.setAttribute("torch-light",'');
  }
}
