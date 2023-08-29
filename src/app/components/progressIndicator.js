AFRAME.registerComponent('progress-indicator', {
  init: function () {
    const indicator = document.createElement('a-entity');
    indicator.setAttribute('position', '-0.5 0.3 -0.5')

    var geometry = new THREE.PlaneGeometry(0.05, 0.5);
    geometry.rotateZ(1.57079633)
    var material = new THREE.ShaderMaterial({
      uniforms: {
        color1: {
          value: new THREE.Color("#ff0000")
        },
        color2: {
          value: new THREE.Color("#35ff00")
        }
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
    indicator.object3D.add(new THREE.Mesh(geometry, material));
    this.el.appendChild(indicator)
  }
})
