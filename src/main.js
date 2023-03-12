//import { createApp } from 'vue'
//import App from './App.vue'

//-------------------------------------------------

import * as THREE from "three";
import './style.css'
 
// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.SphereGeometry( 3, 64, 64 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff83,  } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Sizes
const sizes = {
    width : window.innerWidth,
    height : window.innerHeight
}

// Light 
const light = new THREE.PointLight(0xffffff, // Color of the light
                                    1,       //
                                    100);    // 
light.position.set(0,  // x
                   10, // y
                   10); // z
scene.add( light );

// Camera
const camera = new THREE.PerspectiveCamera(
    45, // Field of view, NB image easily distorted
    sizes.width/sizes.height, // Aspect ratio
    0.1, // Min distance
    100  // Max distance
);
camera.position.z = 10;
scene.add( camera );

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene, camera);


// Resizer
window.addEventListener("resize", ()=>{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
});

// Loop
const loop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
};
loop(); // rerenders every frame 



//-------------------------------------------------
//createApp(App).mount('#app')
