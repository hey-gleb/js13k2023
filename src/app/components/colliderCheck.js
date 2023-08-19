AFRAME.registerComponent("collider-check", {
  dependencies: ["raycaster"],

  init: function () {
    this.el.addEventListener("raycaster-intersection", function (e) {
      console.log("Player hit something!");
    });
  },
});
