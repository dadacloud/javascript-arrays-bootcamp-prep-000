var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(chocolateBars, string){
 var candy = [string,...chocolateBars];
 return candy;

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, string){
  chocolateBars.unshift(string);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, string){
 var morechocolateBars = [...chocolateBars, string];
 return morechoclateBars;
}

function destructivelyAddElementToEndOfArray (chocolateBars, string){
  return chocolateBars.push(string);
}

function accessElementInArray(chocolateBars,index){
  return chocolateBars [index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift();
}

function removeElementFromBeginningOfArray(chocolateBars){
  var slicedbars = chocolateBars.slice(1);
  return slicedbars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop();
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length-1);
}


