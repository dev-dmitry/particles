const SystemBase = require('../system-base');
const Particle = require('./particle');

class System extends SystemBase {
	constructor(loader) {
		super(loader);
		this.duration = 5500;
		this.lines = [];
		this.count = 1;
		this.height = 10;
    /*    this.particleGroup.position.y = 0;
        this.particleGroup.position.x = radius;*/
		//for(let i = 0; i <= 4; i++) {
			this.particles.push(new Particle({
				group: this.particleGroup,
				order: 1,
                x: 5,
				alternate: false,
				color: 0xffffff,
				opacity: 1,
				size: 2,
				radius: 4,
			}, this, this.loader));
		//}

        this.addParticle()
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
    addParticle(){
        let particle;
        for(let i = 1; i <= 1; i++) {
            particle = new newData(this.particleGroup);
            //particle.group.position.x = radius * i;
            this.particles.push(new Particle({
                group: particle.group,
                order: i / (10 - 1),
                alternate: false,
                color: 0xffffff,
                opacity: 1,
                size: 0.5,
                radius: 4,
            }, this, this.loader));
        }


        function newData(name) {
            this.group = name;
        }
    }
	update() {
		super.update();




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
