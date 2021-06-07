function truthCheck(collection, pre) {
  return collection.map(item => !!item[pre]).indexOf(false) === -1 ? true : false;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));