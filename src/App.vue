<script setup>
import { onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import './style.css'
import gsap from "gsap";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import * as poseDetection from '@tensorflow-models/pose-detection';
//import '@mediapipe/pose';
import * as mpPose from '@mediapipe/pose';

// ----------------------- Functions ----------------------------------------------

// Check if webcam access is supported.
function getUserMediaSupported() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

function enableCam(event) {
  // Enable the live webcam view and start classification.
  
  // getUsermedia parameters to force video but not audio.
  const constraints = {
    video: true
  };

  // Activate the webcam stream.
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    video.srcObject = stream;
    video.addEventListener('loadeddata', predictPoses);
  });
}

async function loadBlazePose() {
  const model = poseDetection.SupportedModels.BlazePose;
  const detectorConfig = {
    runtime: 'mediapipe', // or 'tfjs'
    modelType: 'lite',
    solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${mpPose.VERSION}`
  };
  const detector = await poseDetection.createDetector(model, detectorConfig);

  // Flag to blcok the visibility of loading object
  modelloaded = true

  console.log("Blaze pose loaded on mediapipe runtime..")
  // Clear the loader animation
  var x = document.getElementById("loader");
  if (ailoaded && modelloaded) {
    x.style.display = "none";
  }  
  // Clear the loader text 
  var x = document.getElementById("loaderText");
  if (ailoaded && modelloaded) {
    x.style.display = "none";
  }  
  poseModel = detector;
}

function predictPoses(){
  if(poseModel && video){
    poseModel.estimatePoses(video).then(function (predictions) {
          for (let i = 0; i < children.length; i++) {
              liveView.removeChild(children[i]);
          }
          children.splice(0);
          var num = 0;

          if(predictions.length!=0){
            let predictionsArray = predictions[0];
            let keypoints = predictionsArray.keypoints;
            
            for (let k=0; k < keypoints.length; k++) {
              if (keypoints[k].score > 0.70) {
                num=num+1; // increase the "found" kp's 

                // Add indicator if point is within image range
                if(keypoints[k].x>0 && keypoints[k].y>0 && keypoints[k].x<sizes.videoWidth && keypoints[k].y<sizes.videoHeight){
                  createFeatureIndicator(keypoints[k].x, keypoints[k].y);
                }

                // If keypoint is Nose (#0) update "midCapsule" range from 10%->90% (visualization gets Fd-up if used wide range)
                if(keypoints[k].name == 'nose'){
                  var loc = (keypoints[k].x / sizes.videoWidth)*100;
                  if(loc<2){
                    loc = 2;
                  }
                  else if(loc>98){
                    loc = 98;
                  }
                  midCapsule.style.transform = `translate(${loc}%, 0%)`
                  midCapsuleText.style.transform = `translate(${loc}%, 0%)`
                }
              }
            }
            console.log(num)
            midCapsuleText.textContent=num.toString();

          }
          window.requestAnimationFrame(predictPoses);

          fpsclock.stop(); // Set individual stoptime 
          if(fpsclock.getSeconds()>1){
            // Update FPS counter text
            FPSCounter += 1;
            FPSText.textContent = "FPS: " + FPSCounter.toString();
            fpsclock.clear(); // Clear time from start and end
            fpsclock.start(); // Start new time
            FPSCounter = 0;
          }
          else{
            // Increment FPS counter
            FPSCounter += 1;
          }

      });
  }
}

function createFeatureIndicator(x, y) {
    const featureIndicator = document.createElement('div');
    featureIndicator.setAttribute('class', 'featureIndicator');
    featureIndicator.style = "left: " + x + "px;"
        + "top: " + y + "px;"
        +  "width: .5rem; height: .5rem;"
    liveView.appendChild(featureIndicator);
    children.push(featureIndicator);
}

function Stopwatch(){
  var startTime, endTime, instance = this;

  this.start = function (){
    startTime = new Date();
  };

  this.stop = function (){
    endTime = new Date();
  }

  this.clear = function (){
    startTime = null;
    endTime = null;
  }

  this.getSeconds = function(){
    if (!endTime){
    return 0;
    }
    return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  }
}

// ------------------------------------------------------------------------------------
// ----------------------- Preprocessing ----------------------------------------------
// Test webcam
const bool = getUserMediaSupported()
if (bool){
  console.log("Camera is up and functional..")
} 
else {
  console.warn('getUserMedia() is not supported by your browser');
}

let modelloaded, ailoaded;
let modelGLTF, leftarm, rightarm, poseModel; 
let video, liveView;
let midCapsule, midCapsuleText, FPSText;
var fpsclock = new Stopwatch();
fpsclock.start();
var FPSCounter = 0;
var children = [];

// Sizes
const sizes = {
    width : window.innerWidth,
    height : window.innerHeight,
    videoWidth : 640,
    videoHeight: 480
}

// Animate the page (timeline magic)
const tl = gsap.timeline({defaults:{duration:1}});
onMounted(() => {
  tl.fromTo('nav', {y:'-100%', opacity:'0'}, {y:'0%',opacity:'1'})
  tl.fromTo('.title', {opacity: '0'}, {opacity: '1'})

  // Reference DOM elements after they are mounted
  video = document.getElementById('webcam');
  liveView = document.getElementById('liveView');
  // Capsule view
  midCapsule = document.getElementById('midCapsule');
  midCapsuleText = document.getElementById('midCapsuleText');
  FPSText = document.getElementById('fpsText');
  // Enable webcam
  console.log(video)
  enableCam()

})

// -------------------------------------------------------------------------------------
// ----------------------- Load models and Scene ---------------------------------------

// Load the model
loadBlazePose();

// Scene
const scene = new THREE.Scene();
const clock = new THREE.Clock(); // For testing the bones of the rig

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

    // Flag to blcok the visibility of loading object
    ailoaded = true;

    // Clear the loader animation
    var x = document.getElementById("loader");
    if (ailoaded && modelloaded) {
      x.style.display = "none";
    }  
    // Clear the loader text 
    var x = document.getElementById("loaderText");
    if (ailoaded && modelloaded) {
      x.style.display = "none";
    }  

    modelGLTF = gltf.scene
    rightarm = modelGLTF.getObjectByName( 'mixamorigRightArm_00' );
    leftarm = modelGLTF.getObjectByName( 'mixamorigLeftArm_09' );

    console.log(modelGLTF)

    gltf.scene.scale.set(0.01,0.01,0.01)
		scene.add( modelGLTF );

    // Animate the page (timeline magic)
    const tl_model = gsap.timeline({defaults:{duration:1}});
    tl_model.fromTo(modelGLTF.scale, {z:0, x:0, y:0}, {z:0.01, x:0.01, y:0.01})

    // Helpers
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );
    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );

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
//controls.autoRotate = true;
//controls.autoRotateSpeed = 1;

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

// ----------------------- The animation and prediction loop ---------------------------------------
const loop = () => {

  if ( modelGLTF ) {

    if ( rightarm ) {
      const t = clock.getElapsedTime();
      rightarm.rotation.x += Math.sin( t ) * 0.005;
    }
    if ( leftarm ) {
      const t = clock.getElapsedTime();
      leftarm.rotation.x += Math.sin( t ) * 0.005;
    }
  }

    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
};
loop(); // rerenders every frame 

// ------------------------------------------------------------------------------------------------

</script>

<template>
  <nav>
      <a href="/MetaMeApp">
        ARS MetaVerse
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

    <p class="loadingText" id="loaderText">
      Loading AI and 3D model
    </p>

    
    <div id="liveView" class="camView">
      <video id="webcam" autoplay muted width="640" height="480"></video>
    </div>

    <svg class="poseVisualization" width="40%" height="5%" >
      <rect y="10" width="100%" height="50%" rx="5" style="fill:rgb(255,255,255);" />
      <rect id="midCapsule" x="-15" y="0" width="30" height="100%" fill="silver" stroke="black" stroke-width="5" ry="10" rx="20"/>
      <text id="midCapsuleText" x="-12" y="65%" class="font">33</text>
    </svg>

    <h1 id="fpsText" class="fps">
      X
    </h1>
    -->
</template>

<style scoped>
  #midCapsule{
    transform: translate(30%, 0%)
  }
  #midCapsuleText{
    transform: translate(30%, 0%)
  }
  .font {
          font: bold 22px sans-serif;
        }

  .loadingText{
    color:white;
    z-index: 2;
    position: absolute;
    font-size: .8rem;
    left:50%;
    top:55%;
    transform: translate(-50%, -50%)
  }
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
