//import { createApp } from 'vue'
//import App from './App.vue'

//-------------------------------------------------

import * as THREE from "three";
import './style.css'
import gsap from "gsap";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
 
// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.SphereGeometry( 2, 64, 64 );
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

const light2 = new THREE.PointLight(0xffffff, // Color of the light
                                    1,       //
                                    100);    // 
light.position.set(0,  // x
                   10, // y
                   10); // z
light2.position.set(0,  // x
                   -10, // y
                   -10); // z
scene.add( light );
scene.add( light2 );

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
renderer.setPixelRatio(2) // more pixels -> smoother edges -> more calculations
renderer.render(scene, camera);

// Controls 
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // slower movement
controls.enablePan = false; // disable zooming and dragging
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

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
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
};
loop(); // rerenders every frame 

// Animate the page (timeline magic)
const tl = gsap.timeline({defaults:{duration:1}});
tl.fromTo(sphere.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
tl.fromTo('nav', {y:'-100%'}, {y:'0%'})
tl.fromTo('.title', {opacity: '0'}, {opacity: '1'})

//-------------------------------------------------
//createApp(App).mount('#app')
