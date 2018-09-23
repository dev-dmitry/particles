let option = {
    quantity: 2,
    charge: Boolean,
    durations: Number,
    induction: Number,
};
const coordinateQuarter = [ 90, 180, 270, 360 ];
const gapsDegrees = 360 / option.quantity;
let degree = 0;

let options = [];
for(let i = 0; i < option.quantity; i++ ){
    let degreeThis = degree += gapsDegrees;
    const quarter = getCoordinateQuarter(degreeThis);
    const sign = (quarter === 1 || quarter === 3) ? 1 : -1;
    const signAngle = (quarter === 1 || quarter === 3) ? -1 : 1;
    const rotateValue = degreeThis > 90 ?  (90 * (quarter + 1) ) - ( degreeThis - (90 * quarter)) : 90 - degreeThis;
    options.push( {
        radius: 2 * sign,
        size: 0.1,
        increase: Math.PI / 280 * sign,
        aClockwise: !(sign > 0),
        side: sign,
        y: 0,
        angle: {
            x: Math.PI / 180,
            y: Math.PI / 180,
            z: Math.PI / 180,
        },
        position: {
            x: Math.sin(inRad(degreeThis)) * 2,
            y: 0,
            z: (Math.sin(inRad( rotateValue )  ) * 2) * signAngle,
        },
        rotate: {
            x: 0,
            y: -(inRad(rotateValue)),
            z: 0
        },
        degree: degreeThis,
        quarter: quarter,
        rotateValue: rotateValue,
        sign: quarter === 1 || quarter === 3 ? -1 : 1
    } )
}

function getCoordinateQuarter(val) {
    if(val > 90){
        let quarter = 0;
        coordinateQuarter.forEach((el, i)=>{
            const next = i+1;
            if( coordinateQuarter[next] === undefined ) return next;
            if(val > el && val <= coordinateQuarter[next] ){
                return quarter = next;
            }
        });
        return quarter
    }else{
        return 0
    }
}
function inRad( num ) {
    return num * Math.PI / 180;
}
module.exports = options;