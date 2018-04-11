"use strict";
var $ = require("jquery");

require('./components/interface');
require('./enter');
require('./components/figures');
require('./3d/app-3d');



//TODO разобраться почему не работает map
const Calc = require('./3d/utils/calc');

/*class objTest {
    constructor() {
        this.calc = new Calc();
        this.update();
    }
    update(){
        let test = this.calc.map(430,0,2,0,1);
        console.log('CALC - ' + test)
    }

}
new objTest()*/

/*let testObj = {};
let testMap = testObj.map(1,2,3,4,5);
console.log(testObj);
console.log(testMap);*/


