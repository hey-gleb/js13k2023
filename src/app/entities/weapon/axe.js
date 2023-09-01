import { ArmoryObject } from "../armoryObject";

export class Axe extends ArmoryObject {
  constructor(parentId, x, y, z, props) {
    super(parentId, x, y, z);
    //TODO rework?
    this.el.setAttribute("geometry", {
      primitive: "box",
    });
    this.el.setAttribute("material", {
      transparent: true,
      opacity: 0,
    });
    this.el.setAttribute("rotation", {
      //TODO remove from here
      x: 0,
      y: 90,
      // z: 90
    });
    const material = new THREE.LineBasicMaterial({
      color: "#652e13",
      linewidth: 1,
      side: THREE.DoubleSide,
    });
    //TODO rework with MeshStandardMaterial
    const bladeMaterial = new THREE.LineBasicMaterial({
      color: "#6c6c6c",
      side: THREE.DoubleSide,
    });
    //TODO rework with verticals?
    const points_array = [
      new THREE.Vector3(0, 0.3, 0.15),
      new THREE.Vector3(0, 0.1, -0.2),
      new THREE.Vector3(0, 0.25, -0.3),

      new THREE.Vector3(0, 0.3, 0.15),
      new THREE.Vector3(0, 0.25, -0.3),
      new THREE.Vector3(0, 0.4, -0.3),

      new THREE.Vector3(0, 0.3, 0.15),
      new THREE.Vector3(0, 0.4, -0.3),
      new THREE.Vector3(0, 0.55, -0.2),
    ];
    const bladeGeometry = new THREE.BufferGeometry();
    bladeGeometry.setFromPoints(points_array);
    const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);

    //TODO copy part and reuse
    const handleGeometry = new THREE.BoxGeometry(0.05, 1, 0.05);
    const handle = new THREE.Mesh(handleGeometry, material);
    const axeGroup = new THREE.Group();
    axeGroup.add(handle);
    axeGroup.add(blade);
    this.el.object3D.add(axeGroup);
  }
}
