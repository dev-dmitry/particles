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
        this.calculationMotion(i, 'x', {radius, angle, horizontal: true, charge: this.data.props[i].charge});
        this.calculationMotion(i, 'y', {radius, angle, horizontal: false, charge: this.data.props[i].charge});
        this.calculationMotion(i, 'z', {radius, angle, horizontal: true, charge: this.data.props[i].charge});
    }
    calculationMotion(i, axis, data){
        const square = this.getSquare(i, axis, data);
        const ordinate = data.horizontal ? Math.sin(data.angle[axis]) : Math.cos(data.angle[axis]);
        const charge = data.charge ? 1 : -1;
        this.data.mesh[i].position[axis] += square * ordinate * charge;
        if(data.angle[axis]) data.angle[axis] += data.radius * charge;
    }
    getSquare(i, axis, data){
        const props = this.data.props[i];
        const divider = data.horizontal ? props.position[axis] / props.radius : 1;
        return divider * this.inRad( props.radius**2 );
    }
}

module.exports = Particle;