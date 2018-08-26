class Figure{
    constructor(data, scene){
        this.scene = scene;
        this.data = data
    }
    inRad( num ) {
        return num * Math.PI / 180;
    }
}
module.exports = Figure;