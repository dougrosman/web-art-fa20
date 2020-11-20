// import whatever modules you need from three.js

import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  SphereBufferGeometry,
} from '../libs/threejs/build/three.module.js'

import { OrbitControls } from '../libs/threejs/examples/jsm/controls/OrbitControls.js'

// Global variables (we'll use these to rotate our shapes below)
let rotateX = 0;
let rotateY = 0;

// get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

// set the background color of the scene (set this to be the same background color of the container)
scene.background = new Color('skyblue')

// create camera
const fov = 35; // field of view
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

// create lights
const light = new DirectionalLight('white', 6);
light.position.set(10, 10, 10);

// create a shape with geometry, material, and then pass those in
// as arguments to a mesh
const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshStandardMaterial({color: "rgb(255, 0, 255)"});
const cube = new Mesh(geometry, material);

cube.rotation.set(-0.5, -0.1, 0.8);
cube.position.set(1, 1, -10);
cube.scale.set(1.5, 1.5, 1.5);

// create a sphere
const sphereGeo = new SphereBufferGeometry(1, 16, 16);
const sphereMat = new MeshPhongMaterial({color: "green"});
const sphere = new Mesh(sphereGeo, sphereMat);

sphere.position.set(-2, 0, 0);

scene.add(cube, sphere, light);

const renderer = new WebGLRenderer({ antialias: true });

// initialize controls
const controls = new OrbitControls(camera, renderer.domElement);

renderer.physicallyCorrectLights = true;

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);

window.addEventListener("resize", function(){
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
})


// create the animation loop (basically the p5.js draw loop)
renderer.setAnimationLoop(function() {

  cube.rotation.set(rotateX, rotateY, 0);
  rotateX+=0.01;
  rotateY+=0.05;

  controls.update();
  renderer.render(scene, camera);
})



