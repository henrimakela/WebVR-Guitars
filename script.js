AFRAME.registerComponent('next-guitar', {
  init: function () {
    var index = 0;
    var IDs = ['#stratocaster', '#stagg', "#gibson-lespaul", "#ovation", "#acoustic", "#gibson"];
    this.el.addEventListener('click', function (evt) {
      var lastElement = document.querySelector(IDs[index]);
      if(lastElement != null){
        lastElement.object3D.visible = false
      }
      index = (index + 1) % IDs.length;
      var newElement = document.querySelector(IDs[index]);
      newElement.object3D.visible = true;
      console.log(index);
    });
  }
});
