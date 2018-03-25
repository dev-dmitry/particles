"use strict";
var $ = require("jquery");

require('./components/interface');
require('./enter');
require('./components/figures');
require('./3d/app-3d');


//TODO разобраться почему не работает set
/*class objTest{
    constructor(){
        this.update()
    }
    update(){
        let x = 1;
        let y = 2;
        let z = 3;

        this.mesh.position.x = x;
        this.mesh.position.y = y;
        this.mesh.position.z = z;
        /!*let scale = 0.1;
        this.mesh.scale.set(scale, scale, scale);*!/
    }
}
new objTest();*/

//TODO разобраться почему не работает map
/*let testObj = {};
let testMap = testObj.map(1,2,3,4,5);
console.log(testObj)
console.log(testMap)*/
