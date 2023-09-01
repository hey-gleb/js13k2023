let indicator;

AFRAME.registerComponent("progress-indicator", {
  init: function () {
    const scaleRange = [-12, 12];
    const stepsNum = scaleRange.reduce((sum, num) => sum + Math.abs(num), 0);
    //TODO rework
    this.stepOffset = 0.18 / stepsNum;
    const scale = document.createElement("a-entity");
    scale.setAttribute("position", "0 0.35 -0.5");

    indicator = document.createElement("a-plane");
    indicator.setAttribute("position", {
      x: 0,
      y: 0.315,
      z: -0.45,
    });
    indicator.setAttribute("geometry", {
      width: 0.01,
      height: 0.025,
    });
    indicator.setAttribute("material", {
      roughness: 1,
      color: "#000",
    });

    var geometry = new THREE.PlaneGeometry(0.015, 0.4);
    console.log(geometry);
    geometry.rotateZ(1.57079633);
    var material = new THREE.ShaderMaterial({
      uniforms: {
        color1: {
          value: new THREE.Color("#ff0000"),
        },
        color2: {
          value: new THREE.Color("#35ff00"),
        },
      },
      vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
      fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;

    varying vec2 vUv;

    void main() {

      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
    });
    scale.object3D.add(new THREE.Mesh(geometry, material));
    this.el.appendChild(indicator);
    this.el.appendChild(scale);
  },
  doStep: function (step) {
    const currentStep = parseFloat(indicator.object3D.position.x);
    indicator.setAttribute("position", {
      x: currentStep + step * this.stepOffset,
      //TODO reuse
      y: 0.315,
      z: -0.45,
    });
  },
});
