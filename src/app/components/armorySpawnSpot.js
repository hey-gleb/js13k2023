import { Sword } from "../entities/weapon/sword";
import { Shield } from "../entities/weapon/shield";
import { Bow } from "../entities/weapon/bow";
import { Axe } from "../entities/weapon/axe";

AFRAME.registerComponent("armory-spawn-spot", {
  init: function () {
    this.content;
    this.el.setAttribute("geometry", {
      primitive: "box",
      width: 0.5,
      height: 0.5,
      depth: 0.5,
    });
    this.el.setAttribute("material", {
      wireframe: true,
    });
  },
  spawnArmory: function () {
    if (this.content) return;
    const armory = this.getRandomArmory();
    this.content = armory;
    const gameSystem = document.getElementById("scene").systems["game-system"];
    gameSystem.room.el.appendChild(armory.el);
  },
  getRandomArmory: function () {
    const { x, y, z } = this.el.object3D.position;
    const rnd = Math.random();
    if (rnd < 0.25) return new Sword(this.el.id, x, y, z);
    else if (rnd < 0.5) return new Bow(this.el.id, x, y, z);
    else if (rnd < 0.75) return new Axe(this.el.id, x, y, z);
    else if (rnd < 1) return new Shield(this.el.id, x, y, z);
  },
  resetContent: function () {
    this.content = null;
  },
});
