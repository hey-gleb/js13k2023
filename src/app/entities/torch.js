/**
 * TODO
 * Add particles
 * Add torch handle
 * */
import { GameObject } from "./gameObject";

export class Torch extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.props = props || {
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
    };
    this.el.setAttribute("rotation", {
      x: this.props.rotationX || 0,
      y: this.props.rotationY || 0,
      z: this.props.rotationZ || 0,
    });
    const torchHandle = document.createElement("a-entity");
    torchHandle.setAttribute("position", {
      z: -0.45,
    });
    torchHandle.setAttribute("geometry", {
      primitive: "box",
      width: 0.05,
      depth: 0.05,
      height: 0.25,
    });
    torchHandle.setAttribute("rotation", {
      x: 25,
    });
    torchHandle.setAttribute("material", {
      color: "#a1a1a1",
    });
    this.el.appendChild(torchHandle);
    this.el.setAttribute("torch-light", "");
  }
}
