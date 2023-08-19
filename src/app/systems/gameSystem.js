import { Room } from "../entities/room";
import { Player } from "../entities/player";
import { Warrior } from "../entities/warrior";

AFRAME.registerSystem("game-system", {
  schema: {},
  init: function () {
    this.carrySystem = document.getElementById("scene").systems["carry-system"];
    this.room = new Room(0, 1.25, 0, {
      depth: 12,
      height: 3,
      width: 10,
    });
    this.player = new Player(0, 0, 0);
    this.el.appendChild(this.player.el);
    this.el.appendChild(this.room.el);
    this.processNextRound();
  },
  processNextRound: function () {
    this.createWarrior();
  },
  createWarrior: function () {
    const warrior = new Warrior(-4, 0, 4);
    this.currentWarrior = warrior;
    this.room.el.appendChild(warrior.el);
  },
  processWarriorTrigger: function () {
    this.currentWarrior.el.components["warrior"].moveTo(8, 0, 4);
    setTimeout(() => {
      document.getElementById("warrior").remove();
      this.currentWarrior = null;
      this.processNextRound();
    }, 2000);
  },
  tick(time, timeDelta) {},
});
