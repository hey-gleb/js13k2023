export class Player {
  constructor(x, y, z, props) {
    this.el = document.createElement("a-camera");
    this.el.setAttribute("id", "player");
    this.el.setAttribute("collider-check", "");
    const cursor = document.createElement("a-cursor");
    cursor.setAttribute("raycaster", {
      showLine: true,
      objects: [".collidable", ".trigger"],
    });
    cursor.setAttribute("raycaster-listen", "");
    cursor.setAttribute("cursor-listener", "");
    this.el.setAttribute("progress-indicator", "");
    this.el.appendChild(cursor);
  }
}
