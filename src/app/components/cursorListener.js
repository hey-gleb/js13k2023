AFRAME.registerComponent("cursor-listener", {
  dependencies: ["raycaster"],
  init: function () {
    const carrySystem = document.getElementById("scene").systems["loot-system"];
    const gameSystem = document.getElementById("scene").systems["game-system"];
    this.el.addEventListener("click", function (evt) {
      if (evt.detail.intersectedEl.className === "collidable") {
        carrySystem.pickup(evt.detail.intersection.object);
      }
      if (evt.detail.intersectedEl.className === "trigger") {
        evt.detail.intersection.object.el.components[
          "gate-switch"
        ].handleClick();
        gameSystem.processWarriorTrigger();
      }
      console.log("I was clicked at: ", evt.detail.intersection);
    });
  },
});
