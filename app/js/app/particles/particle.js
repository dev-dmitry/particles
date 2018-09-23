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
    calculationMotion(i, axis, data){
        const square = this.getSquare(i, axis, data);
        const ordinate = data.horizontal ? Math.sin(data.angle[axis]) : Math.cos(data.angle[axis]);
        this.data.mesh[i].position[axis] += square * ordinate;
        if(data.angle[axis]) data.angle[axis] += data.radius;
    }
    getSquare(i, axis, data){
        const props = this.data.props[i];
        const divider = data.horizontal ? props.position[axis] / Math.abs(props.radius) : 1;
        return divider * this.inRad( Math.abs(props.radius)**2 );
    }
}

module.exports = Particle;