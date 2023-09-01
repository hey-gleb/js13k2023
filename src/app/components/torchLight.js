import { randomInRange } from "../utils/random";

AFRAME.registerComponent("torch-light", {
  init: function () {
    this.el.setAttribute("light", {
      color: "#fedd39",
      type: "point",
      intensity: 0.5,
      distance: 10,
      castShadow: true,
    });
    const fromIntensity = parseFloat(
      Number(randomInRange(0.2, 0.4)).toFixed(2),
    );
    const toIntensity = parseFloat(
      Number(randomInRange(fromIntensity, 0.6)).toFixed(2),
    );
    const animationDuration = Math.round(randomInRange(1000, 2500));
    this.el.setAttribute("animation__first", {
      property: "light.intensity",
      from: fromIntensity,
      to: toIntensity,
      dur: animationDuration,
      startEvents: ["loaded", "animationcomplete__second"],
    });
    this.el.setAttribute("animation__second", {
      property: "light.intensity",
      from: toIntensity,
      to: fromIntensity,
      dur: animationDuration,
      startEvents: ["loaded", "animationcomplete__first"],
    });
    this.lastUpdate = 0;

    const particleContainer = document.createElement("a-entity");
    particleContainer.setAttribute("position", "0 0 -0.35");
    particleContainer.setAttribute("scale", "0.2 0.01 0.2");
    this.el.append(particleContainer);

    this.particles = [];

    var energyGeometry = new THREE.BoxGeometry(0.1, 10, 0.1);

    for (var i = 0; i < 30; i++) {
      var energyMaterial = new THREE.MeshStandardMaterial({
        color: "#863e18",
        transparent: false,
        opacity: 1,
        emissive: "#98240d",
      });
      var energyMaterial2 = new THREE.MeshStandardMaterial({
        color: "#463b3b",
        transparent: false,
        opacity: 1,
        emissive: "#4f4f4f",
      });
      energyMaterial.flatShading = true;
      var mesh = false;

      if (Math.random() > 0.5) {
        mesh = new THREE.Mesh(energyGeometry, energyMaterial);
      } else {
        mesh = new THREE.Mesh(energyGeometry, energyMaterial2);
      }
      this.particles.push({
        mesh: mesh,
      });
      particleContainer.object3D.add(mesh);
    }

    // const smoke = new THREE.Group();
    // var material = new THREE.MeshLambertMaterial({
    //   color: 0xFFFFFF
    // });
    //
    // this.puffs = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275];
    //
    // for (var i = 0; i < this.puffs.length; i++) {
    //   const mesh = new THREE.Mesh(
    //     new THREE.IcosahedronGeometry(20, 0),
    //     material
    //   )
    //   mesh.geometry.scale(0.3, 0.3, 0.3)
    //   smoke.add(
    //     mesh
    //   );
    // }
    // // console.log(smoke)
    // for (var j = 0; j < smoke.children.length; j++) {
    //   console.log(smoke.children[j].geometry)
    //   // smoke.children[j].geometry.computeFlatVertexNormals();
    //   smoke.children[j].position.setX(Math.random() * 20);
    //   smoke.children[j].position.setZ(Math.random() * 20);
    //   smoke.children[j].rotation.x = Math.random();
    //   smoke.children[j].rotation.y = Math.random();
    //   smoke.children[j].rotation.z = Math.random();
    // }
    // particleContainer.object3D.add(smoke);
    // this.smoke = smoke;
  },
  tick: function (time, timeDelta) {
    for (var i = 0; i < this.particles.length; i++) {
      if (this.particles[i].mesh.visible) {
        let distance = this.particles[i].mesh.position.y + timeDelta * 0.06;

        this.particles[i].mesh.material.opacity = (120 - distance) / 120;
        if (distance > 120) {
          this.particles[i].mesh.visible = false;
        }
        this.particles[i].mesh.position.setY(distance);
      }
    }

    if (time - this.lastUpdate > 50) {
      for (var i = 0; i < this.particles.length; i++) {
        if (this.particles[i].mesh.visible == false) {
          this.particles[i].mesh.visible = true;
          this.particles[i].mesh.position.set(
            Math.random() * 1.5 - 0.7,
            12,
            Math.random() * 1.5 - 0.7,
          );
          break;
        }
      }
      this.lastUpdate = time;
    }
    // for (var i = 0; i < this.puffs.length; i++) {
    //   if (this.puffs[i] >= 300)
    //     this.puffs[i] = 1;
    //   else
    //     this.puffs[i]++;
    //
    //   this.smoke.children[i].position.setY(this.puffs[i]);
    //   this.smoke.children[i].scale.setScalar(
    //     Math.sin(this.puffs[i] / 300.0 * Math.PI)
    //   );
    //   this.smoke.children[i].rotateX(Math.sin(this.puffs[i] / 25000.0));
    //   this.smoke.children[i].rotateY(Math.sin(this.puffs[i] / 25000.0));
    //   this.smoke.children[i].rotateZ(Math.sin(this.puffs[i] / 25000.0));
    // }
  },
});
