import * as THREE from './three.js';

//Crear una escena
const scene = new THREE.Scene();

//Crear una cámara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Crea un render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

//Crea el html para visualizar la escena 3D
document.body.appendChild( renderer.domElement );


//Dibujar un cuboide
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//Crea un material para el cuboide
const material = new THREE.MeshBasicMaterial( { color: 0x8C130D } );

//Dibuja el cuboide de acuerdo a la geometria y el material
const cube = new THREE.Mesh( geometry, material );

//Agrega el cubo a la escena
scene.add( cube );

//Posicion de la camara para ver al objeto
camera.position.z = 2;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    
	renderer.render( scene, camera );

}