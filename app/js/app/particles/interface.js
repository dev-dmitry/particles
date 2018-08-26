let option = {
    quantity: Number,
    charge: Boolean,
    durations: Number,
    induction: Number,
}

let options = [];
for(let i = 0; i <= option.quantity; i++ ){
    options.push(option)
}


let gapsDegrees = 360 / option.quantity
let degree = 0;
let algorim = `Проходя по циклу, выставляем градусы, прибавляя к degree gapsDegrees`