import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const material = new THREE.MeshStandardMaterial({map: moonTexture});
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(5, 18, 0);


const animateMoon = () => {
  requestAnimationFrame(animateMoon);
  sphere.rotation.x += 0.01 /5;
  sphere.rotation.y += (0.01 / 2) /5;
  sphere.rotation.z += 0.01 /5; 
  controls.update();
  renderer.render(scene, camera);
}

animateMoon();

const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('3wPVPxQ-spacecom-wallpaper.jpg');
scene.background = spaceTexture;

const button1 = document.getElementById("slide1");
const button2 = document.getElementById("slide2");
const button3 = document.getElementById("slide3");
const button4 = document.getElementById("slide4");
const button5 = document.getElementById("slide5");
const button6 = document.getElementById("slide6");



const uranusGeometry = new THREE.SphereGeometry(15, 32, 16);
const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
const uranusMaterial = new THREE.MeshStandardMaterial({map: uranusTexture});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

const venusGeometry = new THREE.SphereGeometry(15, 32, 16);
const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const venusMaterial = new THREE.MeshStandardMaterial({map: venusTexture});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);

const earthGeometry = new THREE.SphereGeometry(15, 32, 16);
const earthTexture = new THREE.TextureLoader().load('earth2.jpg');
const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

const marsGeometry = new THREE.SphereGeometry(15, 32, 16);
const marsTexture = new THREE.TextureLoader().load('mars.jpg');
const marsMaterial = new THREE.MeshStandardMaterial({map: marsTexture});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);

const plutoGeometry = new THREE.SphereGeometry(15, 32, 16);
const plutoTexture = new THREE.TextureLoader().load('pluto.jpg');
const plutoMaterial = new THREE.MeshStandardMaterial({map: plutoTexture});
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);


const animateUranus = () => {
  requestAnimationFrame(animateUranus);
  uranus.rotation.x += 0.01 /5;
  uranus.rotation.y += (0.01 / 2) /5;
  uranus.rotation.z += 0.01 /5; 
  controls.update();
  renderer.render(scene, camera);
}

const animateVenus = () => {
  requestAnimationFrame(animateVenus);
  venus.rotation.x += 0.01 /5;
  venus.rotation.y += (0.01 / 2) /5;
  venus.rotation.z += 0.01 /5; 
  controls.update();
  renderer.render(scene, camera);
}

const animateEarth = () => {
  requestAnimationFrame(animateEarth);
  earth.rotation.x += 0.01 /5;
  earth.rotation.y += (0.01 / 2) /5;
  earth.rotation.z += 0.01 /5; 
  controls.update();
  renderer.render(scene, camera);
}

const animateMars = () => {
  requestAnimationFrame(animateMars);
  mars.rotation.x += 0.01 /5;
  mars.rotation.y += (0.01 / 2) /5;
  mars.rotation.z += 0.01 /5; 
  controls.update();
  renderer.render(scene, camera);
}

const animatePluto = () => {
  requestAnimationFrame(animatePluto);
  pluto.rotation.x += 0.01 /5;
  pluto.rotation.y += (0.01 / 2) /5;
  pluto.rotation.z += 0.01 /5; 
  controls.update();
  renderer.render(scene, camera);
}
    


window.onload = () => {
 addButtonListeners();
 addResizeListeners();
}

const addButtonListeners = () => {
  const arrVars = [button1, button2, button3, button4, button5, button6];
  arrVars.forEach(element => {
    element.addEventListener('click', () => {
      var item = element;
      if (item.id === 'slide1') {
        deleteObject(sphere);
        scene.add(uranus);
        animateUranus();
      } else if (item.id === 'slide2') {
        deleteObject(uranus);
        scene.add(venus);
        animateVenus();
      } else if (item.id === 'slide3') {
        deleteObject(venus);
        scene.add(earth);
        animateEarth();
      } else if (item.id === 'slide4') {
        deleteObject(earth);
        scene.add(mars);
        animateMars();
      } else if (item.id === 'slide5') {
        deleteObject(mars);
        scene.add(pluto);
        animatePluto();
      } else if (item.id === 'slide6') {
        deleteObject(pluto);
        scene.add(sphere);
      }
  });
   
    

}

,)}

const addResizeListeners = () => {

  window.addEventListener('resize', () => {
    const card = document.getElementById('carouselExampleSlidesOnly');
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

}

const deleteObject = (objectname) => {
  objectname.geometry.dispose();
  objectname.material.dispose();
  scene.remove(objectname);
  objectname = undefined;
}




