let gui = new dat.GUI();
/*let position = gui.addFolder('position');
let scale = gui.addFolder('scale');
let rotation = gui.addFolder('rotation');
let renderOrder = gui.addFolder('renderOrder');
let quaternion = gui.addFolder('quaternion');
let up = gui.addFolder('up');
let matrix = gui.addFolder('matrix');
let matrixWorld = gui.addFolder('matrixWorld');
let boundingSphere = gui.addFolder('boundingSphere');
let parameters = gui.addFolder('parameters');*/
class ParticleBase {
	constructor(config, system, loader) {
		this.system = system;
		this.loader = loader;
		this.calc = this.loader.calc;
		this.ease = this.loader.ease;
		this.group = config.group;
		this.x = config.x;
		this.y = config.y;
		this.z = config.z;
		this.size = config.size;
		this.color = config.color;
		this.opacity = config.opacity;
		this.createMesh();
	}
	createMesh() {

		this.geometry = this.system.sphereGeometry;
		this.material = new THREE.MeshBasicMaterial({
			color: this.color,
			transparent: true,
			opacity: this.opacity,
			depthTest: false,
			precision: 'lowp',
         //   wireframe: true
		});
		this.mesh = new THREE.Mesh(this.geometry, this.material);

		/*this.mesh.position.x = this.x;
		this.mesh.position.y = this.y;
		this.mesh.position.z = this.z;*/
        //this.mesh.position.x = -0.9;
		this.mesh.scale.set(this.size, this.size, this.size);
        /*if(true){
            position.add(this.mesh.position, 'x').min(-10).max(10).step(0.1);
            position.add(this.mesh.position, 'y').min(-10).max(10).step(0.1);
            position.add(this.mesh.position, 'z').min(-10).max(10).step(0.1);
            scale.add(this.mesh.scale, 'x').min(-10).max(10).step(0.1);
            scale.add(this.mesh.scale, 'y').min(-10).max(10).step(0.1);
            scale.add(this.mesh.scale, 'z').min(-10).max(10).step(0.1);
            up.add(this.mesh.up, 'x').min(-10).max(10).step(0.1);
            up.add(this.mesh.up, 'y').min(-10).max(10).step(0.1);
            up.add(this.mesh.up, 'z').min(-10).max(10).step(0.1);
            rotation.add(this.mesh.rotation, '_x').min(-10).max(10).step(0.1);
            rotation.add(this.mesh.rotation, '_y').min(-10).max(10).step(0.1);
            rotation.add(this.mesh.rotation, '_z').min(-10).max(10).step(0.1);
            quaternion.add(this.mesh.quaternion, '_x').min(-10).max(10).step(0.1);
            quaternion.add(this.mesh.quaternion, '_y').min(-10).max(10).step(0.1);
            quaternion.add(this.mesh.quaternion, '_z').min(-10).max(10).step(0.1);
            quaternion.add(this.mesh.quaternion, '_w').min(-10).max(10).step(0.1);
            renderOrder.add(this.mesh, 'renderOrder').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '0').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '1').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '2').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '3').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '4').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '5').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '6').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '7').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '8').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '9').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '10').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '11').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '12').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '13').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '14').min(-10).max(10).step(0.1);
            matrix.add(this.mesh.matrix.elements, '15').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '0').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '1').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '2').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '3').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '4').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '5').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '6').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '7').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '8').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '9').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '10').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '11').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '12').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '13').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '14').min(-10).max(10).step(0.1);
            matrixWorld.add(this.mesh.matrixWorld.elements, '15').min(-10).max(10).step(0.1);
            parameters.add(this.mesh.geometry.parameters, 'heightSegments').min(-50).max(50).step(1);
            parameters.add(this.mesh.geometry.parameters, 'radius').min(-50).max(50).step(1);
            parameters.add(this.mesh.geometry.parameters, 'widthSegments').min(-50).max(50).step(1);
        }*/
		this.group.add(this.mesh);



	}
	reset() {}
}

module.exports = ParticleBase;

