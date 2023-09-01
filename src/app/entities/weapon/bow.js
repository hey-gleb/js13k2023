import { ArmoryObject } from "../armoryObject";

export class Bow extends ArmoryObject {
  constructor(parentId, x, y, z, props) {
    super(parentId, x, y, z, props);
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
    //TODO copy part and reuse
    const bottomPartGeometry = new THREE.BoxGeometry(0.05, 0.3, 0.05);
    bottomPartGeometry.translate(0, -0.4, -0.265);
    bottomPartGeometry.rotateX(-0.8);
    const bottomPart = new THREE.Mesh(bottomPartGeometry, material);
    const upperPartGeometry = new THREE.BoxGeometry(0.05, 0.3, 0.05);
    upperPartGeometry.translate(0, 0.4, -0.265);
    upperPartGeometry.rotateX(0.8);
    const upperPart = new THREE.Mesh(upperPartGeometry, material);
    const mainPartGeometry = new THREE.BoxGeometry(0.05, 0.755, 0.05);
    const mainPart = new THREE.Mesh(mainPartGeometry, material);
    const bowGroup = new THREE.Group();
    bowGroup.add(bottomPart);
    bowGroup.add(upperPart);
    bowGroup.add(mainPart);
    this.el.object3D.add(bowGroup);
  }
}
