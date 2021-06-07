function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + arr[i]['avgAlt']), 3) / GM));
    delete newArr[i].avgAlt;
    newArr[i]['orbitalPeriod'] = orbitalPeriod;
  }
  
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));