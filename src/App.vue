<script setup>
import { onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import './style.css'
import gsap from "gsap";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.SphereGeometry( 2, 10, 10 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff83,  } );
const sphere = new THREE.Mesh( geometry, material );
//scene.add( sphere );

// Gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load(
	// resource URL
	'./hypercasual/scene.gltf',
	// called when the resource is loaded
	function ( gltf ) {

    var x = document.getElementById("loader");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    const modelGLTF = gltf.scene

    console.log(modelGLTF)

    gltf.scene.scale.set(0.01,0.01,0.01)
		scene.add( modelGLTF );

    // Animate the page (timeline magic)
    const tl_model = gsap.timeline({defaults:{duration:1}});
    tl_model.fromTo(modelGLTF.scale, {z:0, x:0, y:0}, {z:0.01, x:0.01, y:0.01})


		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// Sizes
const sizes = {
    width : window.innerWidth,
    height : window.innerHeight
}

// Helpers
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

// Light 
const light = new THREE.PointLight(0xffffff, // Color of the light
                                    1,       //
                                    100);    //

light.position.set(5,  // x
                   10, // y
                   10); // z
scene.add( light );
const lightAmpient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( lightAmpient );

// Camera
const camera = new THREE.PerspectiveCamera(
    45, // Field of view, NB image easily distorted
    sizes.width/sizes.height, // Aspect ratio
    0.1, // Min distance
    100  // Max distance
);
camera.position.z = 10;
camera.position.y = 5;
camera.position.x = -2;
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
controls.autoRotateSpeed = 1;

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
onMounted(() => {
  tl.fromTo('nav', {y:'-100%', opacity:'0'}, {y:'0%',opacity:'1'})
  tl.fromTo('.title', {opacity: '0'}, {opacity: '1'})
})

</script>

<template>
  <nav>
      <a href="/MetaMeApp">
        Sphere
      </a>
      <ul>
        <li>Games</li>
        <li>About</li>
      </ul>
    </nav>
    
    <div class="breeding-rhombus-spinner" id="loader">
      <div class="rhombus child-1"></div>
      <div class="rhombus child-2"></div>
      <div class="rhombus child-3"></div>
      <div class="rhombus child-4"></div>
      <div class="rhombus child-5"></div>
      <div class="rhombus child-6"></div>
      <div class="rhombus child-7"></div>
      <div class="rhombus child-8"></div>
      <div class="rhombus big"></div>
    </div>

    <h1 class="title">
      Spin that shit
    </h1>
</template>

<style scoped>
  .breeding-rhombus-spinner {
      height: 65px;
      width: 65px;

      z-index: 2;
      position: absolute;
      left:50%;
      top:40%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .breeding-rhombus-spinner, .breeding-rhombus-spinner * {
      box-sizing: border-box;
      border-radius: 2px;
    }

    .breeding-rhombus-spinner .rhombus {
      height: calc(65px / 7.5);
      width: calc(65px / 7.5);
      animation-duration: 2000ms;
      top: calc(65px / 2.3077);
      left: calc(65px / 2.3077);
      background-color: #ffffff;
      position: absolute;
      animation-iteration-count: infinite;
    }

    .breeding-rhombus-spinner .rhombus:nth-child(2n+0) {
       margin-right: 0;
     }

    .breeding-rhombus-spinner .rhombus.child-1 {
      animation-name: breeding-rhombus-spinner-animation-child-1;
      animation-delay: calc(100ms * 1);
    }

    .breeding-rhombus-spinner .rhombus.child-2 {
      animation-name: breeding-rhombus-spinner-animation-child-2;
      animation-delay: calc(100ms * 2);
    }

    .breeding-rhombus-spinner .rhombus.child-3 {
      animation-name: breeding-rhombus-spinner-animation-child-3;
      animation-delay: calc(100ms * 3);
    }

    .breeding-rhombus-spinner .rhombus.child-4 {
      animation-name: breeding-rhombus-spinner-animation-child-4;
      animation-delay: calc(100ms * 4);
    }

    .breeding-rhombus-spinner .rhombus.child-5 {
      animation-name: breeding-rhombus-spinner-animation-child-5;
      animation-delay: calc(100ms * 5);
    }

    .breeding-rhombus-spinner .rhombus.child-6 {
      animation-name: breeding-rhombus-spinner-animation-child-6;
      animation-delay: calc(100ms * 6);
    }

    .breeding-rhombus-spinner .rhombus.child-7 {
      animation-name: breeding-rhombus-spinner-animation-child-7;
      animation-delay: calc(100ms * 7);
    }

    .breeding-rhombus-spinner .rhombus.child-8 {
      animation-name: breeding-rhombus-spinner-animation-child-8;
      animation-delay: calc(100ms * 8);
    }

    .breeding-rhombus-spinner .rhombus.big {
      height: calc(65px / 3);
      width: calc(65px / 3);
      animation-duration: 2000ms;
      top: calc(65px / 3);
      left: calc(65px / 3);
      background-color: #ffffff;
      animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
      animation-delay: 0.5s;
    }


    @keyframes breeding-rhombus-spinner-animation-child-1 {
      50% {
        transform: translate(-325%, -325%);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-2 {
      50% {
        transform: translate(0, -325%);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-3 {
      50% {
        transform: translate(325%, -325%);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-4 {
      50% {
        transform: translate(325%, 0);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-5 {
      50% {
        transform: translate(325%, 325%);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-6 {
      50% {
        transform: translate(0, 325%);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-7 {
      50% {
        transform: translate(-325%, 325%);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-8 {
      50% {
        transform: translate(-325%, 0);
      }
    }

    @keyframes breeding-rhombus-spinner-animation-child-big {
      50% {
        transform: scale(0.5);
      }
    }
</style>
