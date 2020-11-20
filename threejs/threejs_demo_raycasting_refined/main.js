import { BoxBufferGeometry,Color,Mesh,MeshStandardMaterial,MeshPhongMaterial,PerspectiveCamera,Scene,WebGLRenderer,DirectionalLight,SphereBufferGeometry,Raycaster,Vector2,
} from '../libs/threejs/build/three.module.js'
import { OrbitControls } from '../libs/threejs/examples/jsm/controls/OrbitControls.js'

main();

// Global Variables
const container, scene, camera, light, renderer, raycaster, mouse;
let clicked;

function main() {
  setup();
}

function setup() {
  // get a reference to the container element that will hold our scene
  container = document.querySelector('#scene-container');

  // create a Scene
  const scene = new Scene();

  // set the background color of the scene
  // (set this to be the same background color of the container)
  scene.background = new Color('skyblue');

  // create camera
  const fov = 35; // field of view
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane

  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 10);

  // create lights
  const light = new DirectionalLight('pink', 6);
  light.position.set(10, 10, 10);

  // create raycaster for clicking on objects
  const raycaster = new Raycaster();

  // create a variable to store our mouse position
  const mouse = new Vector2();
}













function createCube(_x, _y, _z) {
  const g = new BoxBufferGeometry(.5, .5, .5);
  const m = new MeshStandardMaterial({color: "white"});
  const newCube = new Mesh(g, m);
  newCube.position.set(_x, _y, _z);
  scene.add(newCube);
}



// create a shape with geometry, material, and then pass those in
// as arguments to a mesh
const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshStandardMaterial({color: "rgb(255, 0, 255)"});
const cube = new Mesh(geometry, material);

cube.name = "myCube";
cube.rotation.set(-0.5, -0.1, 0.8);
cube.position.set(1, 1, -10);
cube.scale.set(1.5, 1.5, 1.5);

// create a sphere
const sphereGeo = new SphereBufferGeometry(1, 16, 16);
const sphereMat = new MeshPhongMaterial({color: "green"});
const sphere = new Mesh(sphereGeo, sphereMat);

sphere.name = "mySphere";
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

let counter = 0;
// create the animation loop (basically the p5.js draw loop)
renderer.setAnimationLoop(function() {

  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children);

  if(intersects.length > 0) {
    // console.log(intersects);
  }

  
  for(let i = 0; i < intersects.length; i++) {

    //if(mouseClicked) {

      intersects[i].object.material.color.set(0xffffff);
      // if(intersects[i].object.name == "myCube") {
      //   intersects[i].object.material.color.set(0xff0000);
      // } else if (intersects[i].object.name == "mySphere") {
      //   intersects[i].object.material.color.set(0x0000ff);
      // }
      
      // console.log(intersects[i]);
      // window.location.assign("https://crouton.net");
    //}
  }
  cube.rotation.set(rotateX, rotateY, 0);
  rotateX+=0.01;
  rotateY+=0.05;
  counter++;

  let rotationX = Math.sin(counter/50) * 10;
  let rotationY = Math.cos(counter/50) * 10;
  light.position.set(rotationX, rotationY, rotationX);
  //light.rotation.set(rotation, 0, 0);
  controls.update();
  renderer.render(scene, camera);
})

///// EVENT LISTENERS
window.addEventListener("resize", function(){
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
})

window.addEventListener('mousemove', function(e){
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
})

window.addEventListener('pointerdown', function(e){
  mouseClicked = true;
})

window.addEventListener('pointerup', function(e){
  mouseClicked = false;
})