//const data = require('./imitationInterface');
const data = require('./interface');
const Circle = require('./circle');
const Particle = require('./particle');

class Particles {
    constructor(scene) {
        this.data = {
            props: [],
            mesh: [],
            meshCircle: []
        };
        this.circle = new Circle(this.data, scene);
        this.particle = new Particle(this.data, scene);

        this.countParticles = data.length;
        console.log( data )
        for(let i = 0; i < this.countParticles; i++){
            this.data.props.push(
                data[i]
            );
            this.data.mesh.push(0);
            this.data.meshCircle.push(0);
            this.particle.createParticles(i);
            this.circle.createCircle(i);
        }
    }
    updateElements() {
        for(let i = 0; i < this.countParticles; i++){
            this.particle.motionParticle(i);
            const props = this.data.props[i];
            if ( (props.y + props.increase) <= 2 && (props.y + props.increase) >= -2 ){
                props.y += props.increase;
                this.circle.motionCircle(i)
            } else {
                props.y = props.aClockwise ? -2 : 2;
                this.circle.motionCircle(i)
            }
        }
    }
}

module.exports = Particles;