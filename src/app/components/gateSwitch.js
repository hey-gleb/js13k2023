AFRAME.registerComponent("gate-switch", {
  init: function () {},
  handleClick: function () {
    const switcher = document.getElementById("switcher");
    switcher.setAttribute("animation__rotation-down", {
      property: "rotation.x",
      to: -135,
      dur: 800,
      easing: "linear",
    });
    switcher.setAttribute("animation__down", {
      property: "position",
      to: { x: 0, y: -0.1, z: -0.1 },
      easing: "linear",

      dur: 800,
    });
    switcher.setAttribute("animation__up", {
      property: "position",
      to: { x: 0, y: 0.1, z: -0.1 },
      dur: 800,
      easing: "linear",

      startEvents: ["animationcomplete__down"],
    });
    switcher.setAttribute("animation__rotation-up", {
      property: "rotation.x",
      from: -135,
      to: -45,
      easing: "linear",
      dur: 800,
      startEvents: ["animationcomplete__rotation-down"],
    });
  },
});
