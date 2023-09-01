import { ArmoryObject } from "../armoryObject";

export class Sword extends ArmoryObject {
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
    //TODO rework?
    const points_array = [
      new THREE.Vector3(0, 0.1, -0.06),
      new THREE.Vector3(0, 0.1, 0.06),
      new THREE.Vector3(0, 0.75, -0.06),

      new THREE.Vector3(0, 0.1, 0.06),
      new THREE.Vector3(0, 0.75, 0.06),
      new THREE.Vector3(0, 0.75, -0.06),

      new THREE.Vector3(0, 0.75, 0.06),
      new THREE.Vector3(0, 0.9, 0),
      new THREE.Vector3(0, 0.75, -0.06),
    ];
    const material = new THREE.MeshNormalMaterial({
      side: THREE.DoubleSide,
    });
    const bladeGeometry = new THREE.BufferGeometry();
    bladeGeometry.setFromPoints(points_array);
    const blade = new THREE.Mesh(bladeGeometry, material);
    const gardaGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.25);
    const garda = new THREE.Mesh(gardaGeometry, material);
    gardaGeometry.translate(0, 0.1, 0);
    const handleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 9);
    const handle = new THREE.Mesh(handleGeometry, material);
    const swordGroup = new THREE.Group();
    swordGroup.add(handle);
    swordGroup.add(garda);
    swordGroup.add(blade);
    this.el.object3D.add(swordGroup);
  }
}
