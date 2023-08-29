AFRAME.registerSystem("carry-system", {
  init: function () {
    this.item = null;
  },
  pickup: function (entity) {
    this.item = entity;
  },
  drop: function () {
    //TODO verify it's the same entity
    const armoryTable =
      document.getElementById("armoryTable").components["armory-table"];
    const armorySlot = armoryTable.getNextAvailableSlot();
    const armorySlotPosition = new THREE.Vector3().setFromMatrixPosition(
      armorySlot.object3D.matrixWorld,
    );
    this.item.el.setAttribute("position", {
      x: armorySlotPosition.x,
      y: 0,
      z: armorySlotPosition.z,
    });
    armorySlot.components["armory-slot"].content = this.item;
    this.item = null;
  },
  reset: function () {
    const armoryTable =
      document.getElementById("armoryTable").components["armory-table"];
    armoryTable.resetArmorySlots();
  },
  tick: function () {
    // TODO compare positions
    // TODO check the position not every tick by 10 times per second
    if (!!this.item) {
      const player = document.getElementById("player");
      const playerX = player.object3D.position.x;
      const playerZ = player.object3D.position.z;
      const newCenterX = playerX + 0.25 * Math.cos(player.object3D.rotation.x);
      const newCenterY = playerZ + 0.25 * Math.sin(player.object3D.rotation.y);
      this.item.el.setAttribute("rotation", {
        y: THREE.MathUtils.radToDeg(player.object3D.rotation.y),
        z: 90,
      });
      this.item.el.setAttribute("position", {
        x: newCenterX - 0.25,
        y: 0,
        z: newCenterY - 0.25,
      });
    }
  },
});
