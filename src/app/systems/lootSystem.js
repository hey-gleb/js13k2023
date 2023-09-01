//TODO rename
AFRAME.registerSystem("loot-system", {
  init: function () {
    this.currentPickedLoot = null;
    let armorySpawnSpots = [];
    //TODO rework to get it always enabled
    setTimeout(function () {
      let i = 1;
      let armorySpawnSpot = document.getElementById(`spawn-spot-${i}`)
        .components["armory-spawn-spot"];
      //TODO fix condition
      while (armorySpawnSpot && i < 5) {
        armorySpawnSpot = document.getElementById(`spawn-spot-${i}`).components[
          "armory-spawn-spot"
        ];
        armorySpawnSpots.push(armorySpawnSpot);
        armorySpawnSpot.spawnArmory();
        i++;
      }
    }, 300);
    this.armorySpawnSlots = armorySpawnSpots;
  },
  pickup: function (entity) {
    this.currentPickedLoot = entity;
    const armorySpawnSpot = document.getElementById(
      entity.el.components["carriable"].parentId,
    ).components["armory-spawn-spot"];
    armorySpawnSpot.resetContent();
  },
  drop: function () {
    //TODO verify it's the same entity
    const armoryTable =
      document.getElementById("armoryTable").components["armory-table"];
    const armorySlot = armoryTable.getNextAvailableSlot();
    const armorySlotPosition = new THREE.Vector3().setFromMatrixPosition(
      armorySlot.object3D.matrixWorld,
    );
    this.currentPickedLoot.el.setAttribute("position", {
      x: armorySlotPosition.x,
      y: 0,
      z: armorySlotPosition.z,
    });
    armorySlot.components["armory-slot"].content = this.currentPickedLoot;
    this.currentPickedLoot = null;
  },
  reset: function () {
    const armoryTable =
      document.getElementById("armoryTable").components["armory-table"];
    armoryTable.resetArmorySlots();
  },
  processArmorySpawn: function () {
    //TODO remove timeout
    this.armorySpawnSlots.forEach((spawnSlot) => {
      spawnSlot.spawnArmory();
    });
  },
  tick: function () {
    // TODO compare positions
    // TODO check the position not every tick by 10 times per second
    if (!!this.currentPickedLoot) {
      const player = document.getElementById("player");
      const playerX = player.object3D.position.x;
      const playerZ = player.object3D.position.z;
      const newCenterX = playerX + 0.25 * Math.cos(player.object3D.rotation.x);
      const newCenterZ = playerZ + 0.25 * Math.sin(player.object3D.rotation.z);
      // console.log(playerZ, newCenterZ)
      this.currentPickedLoot.el.setAttribute("rotation", {
        y: THREE.MathUtils.radToDeg(player.object3D.rotation.y),
        z: 90,
      });
      this.currentPickedLoot.el.setAttribute("position", {
        x: newCenterX - 0.25,
        y: 0,
        z: newCenterZ - 0.25,
      });
    }
  },
});
