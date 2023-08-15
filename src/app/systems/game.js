import { Room } from "../entities/room";

AFRAME.registerSystem("game", {
  schema: {},

  init: function () {
    console.log("Game Initialized");
    const room = new Room(0, 1.25, 0, {
      depth: 12,
      height: 3,
      width: 10,
    });
    this.el.appendChild(room.el);
  },

  tick(time, timeDelta) {},
});
