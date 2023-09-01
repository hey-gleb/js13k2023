import { Room } from "../entities/room";
import { Player } from "../entities/player";
import { Warrior } from "../entities/warrior";
import { randomInRange } from "../utils/random";

AFRAME.registerSystem("game-system", {
  dependencies: ["loot-system"],
  schema: {},
  init: function () {
    this.carrySystem = document.getElementById("scene").systems["loot-system"];
    this.room = new Room(0, 1.25, 0, {
      depth: 12,
      height: 3,
      width: 10,
    });
    this.player = new Player(0, 0, 0);
    this.el.appendChild(this.player.el);
    this.el.appendChild(this.room.el);
    this.processNextRound();
    //TODO rework
    setInterval(function () {
      const indicator =
        document.getElementById("player").components["progress-indicator"];
      const enemyStep = Math.round(randomInRange(0, 3));
      // indicator.doStep(enemyStep);
    }, 5000);
  },
  processNextRound: function () {
    this.createWarrior();
    setTimeout(function () {
      const carrySystem =
        document.getElementById("scene").systems["loot-system"];
      carrySystem.processArmorySpawn();
    }, 100);
  },
  createWarrior: function () {
    const warrior = new Warrior(-4, 0, 4);
    this.currentWarrior = warrior;
    this.room.el.appendChild(warrior.el);
  },
  processWarriorTrigger: function () {
    this.currentWarrior.el.components["warrior"].moveTo(8, 0, 4);
    const carrySystem = document.getElementById("scene").systems["loot-system"];
    const indicator =
      document.getElementById("player").components["progress-indicator"];
    indicator.doStep(-2);
    carrySystem.reset();
    setTimeout(() => {
      document.getElementById("warrior").remove();
      this.currentWarrior = null;
      //TODO rework with storing reference to the system
      this.processNextRound();
    }, 2000);
  },
  // processEnemyStepSimulation: function () {
  //   const indicator = document.getElementById('player').components['progress-indicator'];
  //   console.log(indicator)
  //   const enemyStep = Math.round(randomInRange(0, 3));
  //   indicator.doStep(enemyStep);
  // },
  tick(time, timeDelta) {
    // console.log(timeDelta);
  },
});
