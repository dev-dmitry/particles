class Circle{
    constructor(data, scene){
        this.scene = scene;
        this.data = data
    }
    createCircle(i){
        this.data.meshCircle[i] = new THREE.Object3D();
        this.data.meshCircle[i].add( new THREE.Line(
            new THREE.Geometry(),
            new THREE.LineBasicMaterial({
                color: 0xffffff,
            })
        ));
        Object.assign(this.data.meshCircle[i].position, this.data.props[i].position);
        this.scene.add(this.data.meshCircle[i]);
        this.motionCircle(i)
        console.log( 'create' )
    }
    motionCircle(i) {
        //TODO наклоны
        /*this.data.meshCircle[i].quaternion._x = this.data.props[i].rotate.x;
        this.data.meshCircle[i].quaternion._y = this.data.props[i].rotate.y;
        this.data.meshCircle[i].quaternion._z = this.data.props[i].rotate.z;*/
        this.data.meshCircle[i].rotation.set(
            this.data.props[i].rotate.x,
            this.data.props[i].rotate.y,
            this.data.props[i].rotate.z,
        );
        this.generateGeometry(
            this.data.meshCircle[i],
            {
                ax: 0, aY: 0,
                xRadius: this.data.props[i].radius,
                yRadius: this.data.props[i].radius,
                aStartAngle: 0,
                aEndAngle: Math.PI * this.data.props[i].y,
                aClockwise: this.data.props[i].aClockwise,
                aRotation: 0,
            }
        );
    }
    generateGeometry(mesh, data) {
        const curve = new THREE.EllipseCurve(
            data.ax, data.aY, data.xRadius, data.yRadius, data.aStartAngle,
            data.aEndAngle, data.aClockwise, data.aRotation
        );
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry(16).setFromPoints(points);
        this.updateGroupGeometry(mesh, geometry);
    }
    updateGroupGeometry(mesh, geometry) {
        mesh.children[0].geometry.dispose();
        mesh.children[0].geometry = geometry;
    }
}

module.exports = Circle;