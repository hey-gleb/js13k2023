AFRAME.registerComponent("warrior", {
  init: function () {
    this.moveTo(1.5, 0, 4);
  },
  //TODO update easing
  moveTo: function (x, y, z) {
    this.el.setAttribute("animation__move_to", {
      property: "position",
      to: { x, z },
      dur: 2000,
    });
  },
});
