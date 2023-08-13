import { Room } from "../entities/room";

AFRAME.registerSystem("game", {
  schema: {},

  init: function () {
    console.log("Game Initialized");
    const room = new Room(0, 1.25, 0, {
      depth: 5,
      height: 2.5,
      width: 5,
    });
    this.el.appendChild(room.el);
  },

  tick(time, timeDelta) {
    // Your gameloop code
    // this.box.update(time, timeDelta);
  },
});
