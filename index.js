
const returnFirstTwoDrivers = (arry) => {return arry.slice(0,2)}
const returnLastTwoDrivers = (arry) => {return arry.slice(arry.length-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n)
{
    return function(fare){return n*fare}
}

const fareDoubler = (fare) => {return createFareMultiplier(2)(fare)}
const fareTripler = (fare) => {return createFareMultiplier(3)(fare)}

function selectDifferentDrivers(ar,fun){
    return fun(ar);
}
