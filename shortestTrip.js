let distXleft = 0;
let distXright = 0;
let distX = Math.floor(destination[0]) - Math.floor(departure[0]);
if (Math.abs(distX) < 1) {
    //(0.4 - 0) + (0.9 - 0)
    distXleft = (Math.abs(departure[0] - Math.floor(departure[0]))) + (Math.abs(destination[0] - Math.floor(destination[0])));
    //(0.4 - 1) + (0.9 - 1)
    distXright = (Math.abs(departure[0] - Math.ceil(departure[0]))) + (Math.abs(destination[0] - Math.ceil(destination[0])));
    (distXleft < distXright) ? distX = distXleft : distX = distXright;
    //Else if is if destination is more than 1 length left of departure
} else if (distX < 0) {
    distX = departure[0] - destination[0];
    //Else if if destination is more than 1 length right of departure
} else {
    distX = destination[0] - departure[0];
}
let distYleft = 0;
let distYright = 0;
let distY = Math.floor(destination[1]) - Math.floor(departure[1]);
if (Math.abs(distY) < 1) {
    distYleft = (Math.abs(departure[1] - Math.floor(departure[1]))) + (Math.abs(destination[1] - Math.floor(destination[1])));
    distYright = (Math.abs(departure[1] - Math.ceil(departure[1]))) + (Math.abs(destination[1] - Math.ceil(destination[1])));
    (distYleft < distYright) ? distY = distYleft : distY = distYright;
    //Else if is if destination is more than 1 length left of departure
} else if (distY < 0) {
    distY = departure[1] - destination[1];
    //Else if if destination is more than 1 length right of departure
} else {
    distY = destination[1] - departure[1];
}
let sum = distX + distY
return sum.toPrecision(2)