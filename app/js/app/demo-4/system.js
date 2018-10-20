const SystemBase = require('../system-base');
const Particle = require('./particle');

class System extends SystemBase {
	constructor(loader) {
		super(loader);
		this.duration = 5500;
		this.lines = [];
		this.count = 1;
		this.height = 10;
	}
	update() {
		super.update();
	}

}

module.exports = System;
