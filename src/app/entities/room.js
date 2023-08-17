import { Torch } from "./torch";
import { Door } from "./door";
import { Sword } from "./sword";
import { Warrior } from "./warrior";
import { GameObject } from "./gameObject";
import { Shield } from "./shield";
import { ArmoryTable } from "./armoryTable";

export class Room extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);

    const torch1 = new Torch(0.5, 0.5, -5.5);
    this.el.appendChild(torch1.el);

    const torch2 = new Torch(-4.5, 0.5, -1, {
      rotationY: 90,
    });
    this.el.appendChild(torch2.el);

    const torch3 = new Torch(4.5, 0.5, -1, {
      rotationY: -90,
    });
    this.el.appendChild(torch3.el);

    const torch4 = new Torch(0.5, 0.5, 4, {
      rotationY: 180,
    });
    this.el.appendChild(torch4.el);

    const door = new Door(-1.5, -0.35, -5.99);
    this.el.appendChild(door.el);

    const sword = new Sword(-2, 0, -0.5);
    this.el.appendChild(sword.el);

    const shield = new Shield(2, 0, -0.5);
    this.el.appendChild(shield.el);

    const warrior = new Warrior(1.5, 0, 4);
    this.el.appendChild(warrior.el);

    const armoryTable = new ArmoryTable(1.5, -1, 2.25);
    this.el.appendChild(armoryTable.el);

    const trigger = document.createElement("a-entity");
    trigger.setAttribute("position", "1.5 0 1.25");
    trigger.setAttribute("material", {
      wireframe: true,
    });
    trigger.setAttribute("geometry", {
      primitive: "box",
      width: 2,
      height: 3,
    });
    trigger.setAttribute("item-trigger");
    this.el.appendChild(trigger);

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
