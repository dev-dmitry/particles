const ParticleBase = require('../particle-base');
const Osc = require('../utils/osc');
let angle = 0;

class Particle extends ParticleBase {
	constructor(config, system, loader) {
		super(config, system, loader);
		this.config = config;
		this.radius = config.radius;
		this.order = config.order;
        this.group = config.group;
		//this.alternate = config.alternate;
		this.osc = new Osc(this.order, 0.015, true, false);
		this.reset();
	}
	reset() {
		super.reset();
		this.osc.reset();
	}
	update() {
		//this.osc.update(this.loader.timescale);
        //let angle = this.calc.map(this.order, 0, 1, -Math.cos(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5), Math.sin(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5));
		let x =   0.12 * Math.sin(angle);
		let z =  0.3 * Math.sin(angle);
		let y =  0.12 * Math.cos(angle);

		this.mesh.position.x += x;
       // this.mesh.position.z += z;
        this.mesh.position.y += y;
        angle += Math.PI/180 * 2;
		//this.mesh.rotation.set(scale, scale, scale);
	}
}

module.exports = Particle;
