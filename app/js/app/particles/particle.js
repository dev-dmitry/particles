const Figure = require('./figure');
class Particle extends Figure{
    constructor(data, scene){
        super(data, scene)
    }
    createParticles(i) {
        const geometry = new THREE.SphereBufferGeometry(this.data.props[i].size, 16, 16);
        const material = new THREE.MeshBasicMaterial();
        this.data.mesh[i] = new THREE.Mesh(geometry, material);
        this.scene.add( this.data.mesh[i]);
        this.motionParticle(i);
    }
    motionParticle(i) {
        const radius = this.inRad(this.data.props[i].radius * this.data.props[i].side);
        const angle = this.data.props[i].angle;
        this.calculationMotion(i, 'x', {radius, angle, horizontal: true});
        this.calculationMotion(i, 'y', {radius, angle, horizontal: false});
        this.calculationMotion(i, 'z', {radius, angle, horizontal: true});
    }
    calculationMotion(i, axis, data ){
        const props = this.data.props[i];
      /*  let divider = data.horizontal && Math.abs(props.radius) !== props.position[axis] ? props.position[this.reverseDivider(axis)] : 1;*/
        const divider = data.horizontal && Math.abs(props.radius) !== props.position[axis] ? this.reverseDivider(axis) : 1;
        const square = this.inRad(props.radius**2) / divider;
        const ordinate = data.horizontal ? Math.sin(data.angle[axis]) : Math.cos(data.angle[axis]);
        this.data.mesh[i].position[axis] += square * ordinate;
        if(data.angle[axis]) data.angle[axis] += data.radius;
    }
    reverseDivider(axis){
        return axis === 'x' ? Math.sqrt(3) : 1
    }
}

module.exports = Particle;