AFRAME.registerComponent("carriable", {
  schema: {
    parentId: { type: "string", default: "" },
  },
  init: function () {
    this.parentId = this.data.parentId;
  },
});
