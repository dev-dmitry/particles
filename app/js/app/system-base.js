class SystemBase {
	constructor(loader) {
		this.loader = loader;

		this.calc = this.loader.calc;
		this.ease = this.loader.ease;

		this.sphereGeometry = new THREE.SphereBufferGeometry(1, 16, 16);
		this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
		this.center = new THREE.Vector3();

		this.particles = [];
		this.particleGroup = new THREE.Object3D();
		this.particleGroup.scale.set(0.0001, 0.0001, 0.0001);
		this.loader.scene.add(this.particleGroup);

		this.entering = true;
		this.enterProgress = 0;
		this.enterRate = 0.1;

		this.exiting = false;
		this.exitProgress = 0;
		this.exitRate = 0.01;
		this.duration = Infinity;
	}

	update() {
        //this.particles[0].update()
       // this.particleGroup.scale.set(1, 1, 1);
	}

	replay() {
		this.particleGroup.scale.set(0.0001, 0.0001, 0.0001);

		let i = this.particles.length;
		while(i--) {
			this.particles[i].reset();
		}

		this.entering = true;
		this.enterProgress = 0;

		this.exiting = false;
		this.exitProgress = 0;
	}

}

module.exports = SystemBase;
