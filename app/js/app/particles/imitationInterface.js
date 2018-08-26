let imitationInterface = [
    /*{
        radius: 2,
        size: 0.1,
        increase: Math.PI / 280,
        aClockwise: false,
        side: -1,
        y: 0,
        angle: {
            x: Math.PI / 360,
            y: Math.PI / 360,
            z: 0,
        },
        position: {
            x: -2,
            y: 0,
            z: 0
        },
        rotate: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    {
        radius: 2,
        size: 0.1,
        increase: Math.PI / 280,
        aClockwise: false,
        side: 1,
        y: 0,
        angle: {
            x: Math.PI / 360,
            y: Math.PI / 360,
            z: 0,
        },
        position: {
            x: 2,
            y: 0,
            z: 0
        },
        rotate: {
            x: 0,
            y: inRad(180),
            z: 0
        }
    },
     {
         radius: 2,
         size: 0.1,
         increase: Math.PI / 280,
         aClockwise: false,
         side: 1,
         y: 0,
         angle: {
             x: 0,
             y: Math.PI / 360,
             z: Math.PI / 360,
         },
         position: {
             x: 0,
             y: 0,
             z: 2
         },
         rotate: {
             x: 0,
             y: inRad(90),
             z: 0
         }
     },*/
  /*  {
         radius: 2,
         size: 0.1,
         increase: Math.PI / 280,
         aClockwise: false,
         side: -1,
         y: 0,
         angle: {
             x: 0,
             y: Math.PI/360,
             z: Math.PI/360,
         },
         position: {
             x: 0,
             y: 0,
             z: -2
         },
         rotate: {
             x: 0,
             y: -inRad(90),
             z: 0
         }
     },*/
   /* {
        radius: -2,
        size: 0.1,
        increase: -Math.PI / 280,
        aClockwise: true,
        side: -1,
        y: 0,
        angle: {
            x: Math.PI / 180,
            y: Math.PI / 180,
            z: Math.PI / 180,
        },
        position: {
            x: Math.sqrt(2),
            y: 0,
            z: Math.sqrt(2)
        },
        rotate: {
            x: 0,
            y: -inRad(45),
            z: 0
        }
    },
    {
        radius: -2,
        size: 0.1,
        increase: -Math.PI / 280,
        aClockwise: true,
        side: -1,
        y: 0,
        angle: {
            x: Math.PI / 180,
            y: Math.PI / 180,
            z: Math.PI / 180,
        },
        position: {
            x: Math.sqrt(3),
            y: 0,
            z: 1
        },
        rotate: {
            x: 0,
            y: -inRad(30),
            z: 0
        }
    },*/
    {
        radius: -2,
        size: 0.1,
        increase: -Math.PI / 280,
        aClockwise: true,
        side: -1,
        y: 0,
        angle: {
            x: inRad(1),
            y: inRad(1),
            z: inRad(1),
        },
        position: {
            x: 1,
            y: 0,
            z: Math.sqrt(3)
        },
        rotate: {
            x: 0,
            y: -inRad(60),
            z: 0
        }
    },
    /*{
        radius: 2,
        size: 0.1,
        increase: Math.PI / 280,
        aClockwise: false,
        side: 1,
        y: 0,
        angle: {
            x: 0,
            y: inRad(0.5),
            z: inRad(0.5),
        },
        position: {
            x: 0,
            y: 0,
            z: 2
        },
        rotate: {
            x: 0,
            y: inRad(90),
            z: 0
        }
    },*/
]


function inRad( num ) {
    return num * Math.PI / 180;
}

module.exports = imitationInterface;