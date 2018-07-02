const ParticleBase = require('../particle-base');
const Osc = require('../utils/osc');
let angle = 0;
let radius = 10 * 2;
let halfPI = Math.PI/180;
let flag = 0;
class Particle extends ParticleBase {
	constructor(config, system, loader) {
		super(config, system, loader);
		this.config = config;
		this.radius = config.radius;
		this.order = config.order;
        this.group = config.group;
		this.reset();
	}
	reset() {
		super.reset();
	}
	update() {
      //  let angle = this.calc.map(this.order, 0, 1, -Math.cos(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5), Math.sin(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5));

        //angle += this.alternate ? Math.PI : 0;
		let x = halfPI * radius * Math.sin(angle);
		let z = halfPI * 0 * Math.sin(angle);
		let y = halfPI * radius* Math.cos(angle);
flag++
		this.mesh.position.x += x;
        this.mesh.position.z += z;
        this.mesh.position.y += y;
        //if(flag<15)console.log( x )

        angle -= halfPI * 2;

	}
}

module.exports = Particle;
