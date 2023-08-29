import { Torch } from "./torch";
import { Door } from "./door";
import { Sword } from "./sword";
import { GameObject } from "./gameObject";
import { Shield } from "./shield";
import { ArmoryTable } from "./armoryTable";
import { GateSwitch } from "./gateSwitch";
import {Table} from "./table";

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

    const sword = new Sword(-4.5, -0.45, 0);
    this.el.appendChild(sword.el);

    const gateSwitch = new GateSwitch(0, 0.2, 2);
    this.el.appendChild(gateSwitch.el);

    const shield = new Shield(2, 0, -0.5);
    this.el.appendChild(shield.el);

    const armoryTable = new ArmoryTable(1.5, -1, 2.25);
    this.el.appendChild(armoryTable.el);

    const table = new Table(-4.5, 0, 0);
    this.el.appendChild(table.el);

    const leftWall = document.createElement('a-box');
    leftWall.setAttribute('position', {
      x: 3.75,
      z: 2.5
    });
    leftWall.setAttribute('geometry', {
      height: 3,
      width: 2.5,
      depth: 0.5
    });
    leftWall.setAttribute('material', {
      side: 'double'
    });
    this.el.appendChild(leftWall);
    const rightWall = document.createElement('a-box');
    rightWall.setAttribute('position', {
      x: -2.25,
      z: 2.5
    });
    rightWall.setAttribute('geometry', {
      height: 3,
      width: 5.5,
      depth: 0.5
    });
    rightWall.setAttribute('material', {
      side: 'double'
    });
    this.el.appendChild(rightWall);

    const column = document.createElement('a-box');
    column.setAttribute('position', {
      x: 2,
      z: -3
    });
    column.setAttribute('geometry', {
      height: 3,
      width: 0.5,
      depth: 0.5
    });
    column.setAttribute('shadow', {
      receive: false
    })
    column.setAttribute('material', {
    });
    this.el.appendChild(column)

    const trigger = document.createElement("a-entity");
    trigger.setAttribute("position", "1.5 0 1.25");
    trigger.setAttribute("material", {
      wireframe: true,
      height: 100
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
      roughness: 1,
    });
    this.el.setAttribute('shadow', {
      cast: false
    })
  }
}
