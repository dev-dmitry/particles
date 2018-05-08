const ParticleBase = require('../particle-base');
const Osc = require('../utils/osc');
let test = true;
let flag = 0
class Particle extends ParticleBase {
	constructor(config, system, loader) {
		super(config, system, loader);
		this.config = config;
		this.radius = config.radius;
		this.order = config.order;
		//this.alternate = config.alternate;
		//this.osc = new Osc(this.order, 0.015, true, false);
		this.reset();

        //TODO добавить в gui объект отвечающий за параметры движения частицы

        let gui = new dat.GUI();
        gui.add(this.config.group.quaternion, '_z').min(-4).max(4).step(0.1);
	}
	reset() {
		super.reset();
	//	this.osc.reset();
	}
	update() {
	    if (test){
	    	console.log(this.config);
	    	flag++;
	    	if(flag>5)test = false;
	    }

		//this.osc.update(this.loader.timescale);
		/*let angle = this.calc.map(this.order, 0, 1, -Math.cos(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5), Math.sin(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5));
		angle += 0;*/
		let angle = 0;
		angle += 0.5;
		let x = Math.cos(angle) * this.radius;
		let y =  Math.sin(angle) * this.radius;
		/*let x = Math.cos(angle) * this.radius;
		let y = this.calc.map(this.order, 0, 1, -this.system.height , this.system.height);*/
		let z = (Math.sin(angle) + Math.cos(angle)) * this.radius;

		this.mesh.position.x = x;
		this.mesh.position.y = y;
		this.mesh.position.z = z;

	//	let scale = 0.1 + (this.osc.val(this.ease.inOutExpo)) * 0.2;
		/*if(this.alternate) {
			scale = 0.1 + (1 - this.osc.val(this.ease.inOutExpo)) * 0.2;
		}*/

		//this.mesh.scale.set(scale, scale, scale);
	}
}

module.exports = Particle;
