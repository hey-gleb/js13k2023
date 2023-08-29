AFRAME.registerComponent("torch-light", {
  init: function () {
    this.el.setAttribute("light", {
      color: "#fedd39",
      type: "point",
      intensity: 0.5,
      distance: 10,
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
    this.lastUpdate = 0;

    const particleContainer = document.createElement('a-entity');
    particleContainer.setAttribute('position', '0 0 -0.35')
    particleContainer.setAttribute('scale', '0.2 0.01 0.2');
    this.el.append(particleContainer);

    this.particles = [];


    var energyGeometry = new THREE.BoxGeometry( 0.1, 10, 0.1 );

    for(var i = 0; i < 30; i++) {
      var energyMaterial = new THREE.MeshStandardMaterial( {color: '#863e18', transparent: false, opacity: 1, emissive: '#98240d' } );
      var energyMaterial2 = new THREE.MeshStandardMaterial( {color: '#463b3b', transparent: false, opacity: 1, emissive: '#4f4f4f' } );
      energyMaterial.flatShading = true;
      var mesh = false;

      if(Math.random() > 0.5) {
        mesh = new THREE.Mesh(energyGeometry, energyMaterial);
      } else {
        mesh = new THREE.Mesh(energyGeometry, energyMaterial2);
      }
      this.particles.push({
        mesh: mesh
      });
      particleContainer.object3D.add(mesh);
    }
  },
  tick: function(time, timeDelta) {
    for(var i = 0; i < this.particles.length; i++) {
      if(this.particles[i].mesh.visible) {
        let distance = this.particles[i].mesh.position.y + timeDelta * 0.06;

        this.particles[i].mesh.material.opacity = (120 - distance) / 120;
        if(distance > 120) {
          this.particles[i].mesh.visible = false;
        }
        this.particles[i].mesh.position.setY(distance);
      }
    }

    if(time - this.lastUpdate > 50) {
      for(var i = 0; i < this.particles.length; i++) {
        if(this.particles[i].mesh.visible == false) {

          this.particles[i].mesh.visible = true;
          this.particles[i].mesh.position.set(
            Math.random() * 1.5 - 0.7,
            12,
            Math.random() * 1.5 - 0.7);
          break;
        }
      }
      this.lastUpdate = time;
    }
  }
});
