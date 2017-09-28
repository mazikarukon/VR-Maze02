'use strict';

require('aframe');

var t = 0;
var speed = 0.01;
var isIntersect = false;

AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
    init: function () {
        this.el.addEventListener('raycaster-intersection', function () {
            isIntersect = true;
        });
        this.el.addEventListener('raycaster-intersection-cleared', function () {
            isIntersect = false;
        });
    }
});

function movePlayer() {
    var camera = document.getElementById('camera');
    
    window.addEventListener('devicemotion', function(event){
        var accZ = event.acceleration.z;
    }
        
    if (camera && isIntersect && accZ < -2) {
        for(i = 0;i=100;i++){
        
            var position = camera.getAttribute('position');
            var rotation = camera.getAttribute('rotation');

            position.x += -Math.cos((rotation.y - 90) * Math.PI / 180) * speed;
            position.z += Math.sin((rotation.y - 90) * Math.PI / 180) * speed;
            camera.setAttribute('position', position);
        }
            
    }
}

function render() {
    t += 0.01;
    requestAnimationFrame(render);
    movePlayer();
}
render();
