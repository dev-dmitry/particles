let option = {
    quantity: 3,
    charge: true,
    durations: 2,
    induction: 5,
    size: 0.1
};

if ( option.induction > 20 ) option.induction = 5;
if ( option.quantity > 50 ) option.quantity = 50;

const coordinateQuarter = [ 90, 180, 270, 360 ];
const gapsDegrees = 360 / option.quantity;
const maxDuration = 15;
const maxRadius = 15;
const induction = 5 / option.induction;
const angleRotation = Math.PI / 180;
let degree = 0;
let options = [];

for(let i = 0; i < option.quantity; i++ ){
    let degreeThis = degree += gapsDegrees;
    const quarter = getCoordinateQuarter(degreeThis);
    const rotateValue = degreeThis > 90 ?  (90 * (quarter + 1) ) - ( degreeThis - (90 * quarter)) : 90 - degreeThis;
    const radius = ((option.durations / maxDuration) * maxRadius) * induction;
    let sign = -1;
    let signAngle = 1;
    if(quarter === 1 || quarter === 3){
        sign = 1;
        signAngle = -1;
    }

    options.push( {
        charge: option.charge,
        radius: radius * sign,
        size: option.size,
        increase: radius / 180 * (option.charge ? sign : signAngle),
        aClockwise: (option.charge ? !(sign > 0) : (sign > 0)),
        side: sign,
        position: {
            x: Math.sin(inRad(degreeThis)) * radius,
            y: 0,
            z: (Math.sin(inRad(rotateValue)) * radius) * signAngle,
        },
        rotate: {
            x: 0,
            y: -(inRad(rotateValue)),
            z: 0
        },
        angle: {
            x: angleRotation,
            y: angleRotation,
            z: angleRotation,
        },
        y: 0,
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