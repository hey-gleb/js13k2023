AFRAME.registerComponent("item-trigger", {
  //TODO add dependency for player component
  init: function () {
    this.playerPosition = null;
    this.temp = new THREE.Vector3();
    this.carrySystem = document.getElementById("scene").systems["loot-system"];
  },
  //TODO review collision resolver
  isPlayerCollide: function () {
    let hvp = this.el.object3D.worldToLocal(
      this.temp.copy(this.playerPosition),
    );
    const triggerBoundingBox = this.el.components.geometry.geometry.boundingBox;
    const box = new THREE.Box3().setFromObject(this.el.object3D);
    return triggerBoundingBox && triggerBoundingBox.containsPoint(hvp);
  },
  tick: function () {
    if (!this.playerPosition) {
      let player = document.getElementById("player");
      if (!player) return;
      this.playerPosition = player.object3D.position;
    }
    const isCollide = this.isPlayerCollide();
    if (isCollide && this.carrySystem.currentPickedLoot) {
      this.carrySystem.drop();
    }
  },
});
