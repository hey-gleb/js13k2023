import { GameObject } from "./gameObject";

const ARMORY_TABLE_SLOTS = 3;
const ARMORY_TABLE_WIDTH = 2;
const BASE_Y_POSITION = 0.75;
const ARMORY_SLOT_EDGE = 0.5;

export class ArmoryTable extends GameObject {
  constructor(x, y, z, props) {
    super(x, y, z);
    this.armorySlots = [];
    this.el.setAttribute("id", "armoryTable");
    this.el.setAttribute("geometry", {
      primitive: "box",
      width: ARMORY_TABLE_WIDTH,
    });
    this.el.setAttribute("material", "");
    this.createArmorySlot();
  }

  createArmorySlot() {
    for (let i = 0; i < ARMORY_TABLE_SLOTS; i++) {
      const slot = document.createElement("a-box");
      slot.setAttribute("armory-slot", "");
      slot.setAttribute("position", {
        x:
          ARMORY_TABLE_WIDTH / ARMORY_TABLE_SLOTS - ARMORY_SLOT_EDGE * 1.35 * i,
        y: BASE_Y_POSITION,
      });
      slot.setAttribute("material", {
        wireframe: true,
      });
      slot.setAttribute("geometry", {
        width: ARMORY_SLOT_EDGE,
        height: ARMORY_SLOT_EDGE,
        depth: ARMORY_SLOT_EDGE,
      });
      this.armorySlots.push(slot);
      this.el.appendChild(slot);
    }
  }
  getNextAvailableSlot() {
    return this.armorySlots.find((armorySlot) => armorySlot.content);
  }
}
