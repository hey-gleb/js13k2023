AFRAME.registerComponent("torch-light", {
  init: function () {
    this.el.setAttribute("light", {
      color: "#fcff38",
      type: "point",
      intensity: 0.4,
      distance: 9,
      castShadow: true,
    });
    this.el.setAttribute("animation__first", {
      property: "light.intensity",
      from: 0.4,
      to: 0.6,
      dur: 2000,
      startEvents: ["loaded", "animationcomplete__second"],
    });
    this.el.setAttribute("animation__second", {
      property: "light.intensity",
      from: 0.6,
      to: 0.4,
      dur: 2000,
      startEvents: ["loaded", "animationcomplete__first"],
    });
  },
});
