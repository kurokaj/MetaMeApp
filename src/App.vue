<script setup>
  import * as THREE from "three";
  import { onMounted } from "vue";
  
  // Scene
  const scene = new THREE.Scene();
  
  // Object
  const geometry = new THREE.TorusGeometry( 10, 3, 16, 10 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const torus = new THREE.Mesh( geometry, material );
  scene.add( torus );
  
  // Camera
  const camera = new THREE.PerspectiveCamera(
      45, // Field of view, NB image easily distorted
      800,600 // Aspect ratio
  );
  scene.add( camera );

  // Renderer
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(800,600)
  renderer.render(scene, camera);


</script>

<template>
  <canvas class="webgl"></canvas>
</template>

<style scoped>

</style>
