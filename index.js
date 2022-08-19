// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice((drivers.length)-2,drivers.length);
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = function(mult){
    return function(fare){
return mult * fare
    }
} ;
const fareDoubler = function(fare){
    const doubler = createFareMultiplier(2);
    return doubler(fare);
};
const fareTripler = function(fare){
    const tripler = createFareMultiplier(3);
    return tripler(fare)
};
const selectDifferentDrivers = function(driverArray, func){
    return func(driverArray)
}