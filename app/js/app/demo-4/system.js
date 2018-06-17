const SystemBase = require('../system-base');
const Particle = require('./particle');

let increase = 0.05;
let counter = 0;
let y;

class System extends SystemBase {
	constructor(loader) {
		super(loader);
		this.duration = 5500;
		this.lines = [];
		this.count = 1;
		this.height = 10;
        this.particleGroup.position.y = 0.0;
        this.particleGroup.position.x = -3.4;
		//for(let i = 0; i <= 4; i++) {
			this.particles.push(new Particle({
				group: this.particleGroup,
				order: 1,
				alternate: false,
				color: 0xffffff,
				opacity: 1,
				size: 0.1,
				radius: 4,
			}, this, this.loader));
		//}

		//???
		/*let lineMaterial = new THREE.LineBasicMaterial({
			color: 0xffffff,
			opacity: 0.5,
			transparent: true
		});
		for(let i = 0; i < this.count; i++) {
			let lineGeometry = new THREE.Geometry();
			lineGeometry.vertices.push(
				new THREE.Vector3(),
				new THREE.Vector3()
			);
			let lineMesh = new THREE.Line(lineGeometry, lineMaterial);
			/!*this.particleGroup.add(lineMesh);
			this.lines.push(lineMesh);*!/
		}*/
	}

	update() {
		super.update();



        if (counter <= 2.04){
            counter = counter > 2 ? 2 : counter;
            EllipseCurve(this.meshCircle);
        }
        function EllipseCurve( mesh ) {
            y = counter;
            counter += increase;
            var data = {
                ax: 0, aY: 0,
                xRadius: 1, yRadius: 1,
                aStartAngle: 0, aEndAngle: Math.PI * y,
                aClockwise: false,
                aRotation: 0,
            };
            function generateGeometry() {
                var curve = new THREE.EllipseCurve(
                    data.ax, data.aY, data.xRadius, data.yRadius, data.aStartAngle,
                    data.aEndAngle, data.aClockwise, data.aRotation
                );
                var points = curve.getPoints( 50 );
                var geometry = new THREE.BufferGeometry(16).setFromPoints( points );
                updateGroupGeometry( mesh, geometry );
            }
            generateGeometry();
        }
        function updateGroupGeometry( mesh, geometry ) {
            mesh.children[ 0 ].geometry.dispose();
            mesh.children[ 0 ].geometry = geometry;
        }



		/*let i = this.particles.length;
		while(i--) {
			this.particles[i].update();
		}

		let j = this.lines.length;*/
		/*while(j--) {
			let p1 = this.particles[j * 2];
			let p2 = this.particles[j * 2 + 1];
			let line = this.lines[j];
			line.geometry.vertices[0].x = p1.mesh.position.x;
			line.geometry.vertices[0].y = p1.mesh.position.y;
			line.geometry.vertices[0].z = p1.mesh.position.z;
			line.geometry.vertices[1].x = p2.mesh.position.x;
			line.geometry.vertices[1].y = p2.mesh.position.y;
			line.geometry.vertices[1].z = p2.mesh.position.z;
			line.geometry.verticesNeedUpdate = true;
		}
		if(this.exiting && !this.loader.isOrbit && !this.loader.isGrid) {
			this.loader.camera.position.z = this.loader.cameraBaseZ - this.ease.inExpo(this.exitProgress, 0, 1, 1) * this.loader.cameraBaseZ;
		}*/
	}

}

module.exports = System;
