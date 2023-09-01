const ARMORY_TABLE_SLOTS = 3;
const ARMORY_TABLE_WIDTH = 2;
const BASE_Y_POSITION = 0.75;
const ARMORY_SLOT_EDGE = 0.5;

AFRAME.registerComponent("armory-table", {
  init: function () {
    this.armorySlots = [];
    this.createArmorySlots();
  },
  createArmorySlots: function () {
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
  },
  resetArmorySlots: function () {
    this.armorySlots.forEach((armorySlot) => {
      //TODO move to the component
      const armorySlotContent = armorySlot.components["armory-slot"].content;
      if (!armorySlotContent) return;
      armorySlotContent.el.remove();
      armorySlot.components["armory-slot"].content = null;
    });
  },
  getNextAvailableSlot: function () {
    // TODO verify if no more available slots
    return this.armorySlots.find(
      (armorySlot) => !armorySlot.components["armory-slot"].content,
    );
  },
});
