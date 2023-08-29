import {GameObject} from "./gameObject";

const TABLE_COLOR = "#784f4f";

export class Table extends GameObject {
  constructor(x, y, z) {
    super(x, y, z);
    this.el.setAttribute('shadow', {
    })
    this.createTableTop();
    this.createTableLegs();
  }

  createTableTop() {
    const tableTop = document.createElement('a-box');
    tableTop.setAttribute('position', {
      x: 0,
      y: -0.5,
      z: 0
    })
    tableTop.setAttribute('geometry', {
      depth: 2,
      height: 0.08
    })
    tableTop.setAttribute('material', {
      color: TABLE_COLOR
    })
    this.el.appendChild(tableTop);
  }

  createTableLegs() {
    [...Array(4).keys()].forEach(num => {
      const tableLeg = document.createElement('a-box');
      tableLeg.setAttribute('position', {
        x: num % 2 === 0 ? 0.3 : -0.3,
        y: -1,
        z: [0,3].includes(num) ? 0.75 : -0.75
      })
      tableLeg.setAttribute('geometry', {
        depth: 0.15,
        width: 0.15
      })
      tableLeg.setAttribute('material', {
        color: TABLE_COLOR,
      });
      this.el.appendChild(tableLeg);
    })
  }
}
