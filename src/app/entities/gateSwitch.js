import { GameObject } from "./gameObject";

export class GateSwitch extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.el.className = "trigger";
    this.el.setAttribute("id", "gate-switch");
    this.el.setAttribute("gate-switch", "");
    this.el.setAttribute("geometry", {
      width: 0.4,
      height: 0.5,
      depth: 0.4,
    });
    this.el.setAttribute("material", {
      wireframe: true,
    });
    const switcherBase = document.createElement("a-box");
    switcherBase.setAttribute("geometry", {
      primitive: "box",
      height: 0.3,
      width: 0.3,
      depth: 0.1,
    });
    switcherBase.setAttribute("color", "#000");
    const switcher = document.createElement("a-cylinder");
    switcher.setAttribute("id", "switcher");
    switcher.setAttribute("color", "#989898");
    switcher.setAttribute("position", "0 0.1 -0.1");
    switcher.setAttribute("rotation", {
      x: -45,
    });
    switcher.setAttribute("geometry", {
      radius: 0.04,
      height: 0.3,
    });
    this.el.appendChild(switcher);
    this.el.appendChild(switcherBase);
  }
}
