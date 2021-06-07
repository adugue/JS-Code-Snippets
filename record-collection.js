// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  
  var propExist = object[id].hasOwnProperty(prop);
  console.log("propExist: " + propExist);
  console.log("value.length: " + value.length);

  if (value.length == 0) {

    console.log("case 4");
    delete object[id][prop];
    return object;

  } else if (prop != "tracks") {

    console.log("case 1");
    object[id][prop] = value;
    return object;

  } else if (prop == "tracks" && propExist == false) {

    console.log("case 2");
    object[id][prop] = [];
    object[id][prop].push(value);
    return object;

  } else if (prop == "tracks" && propExist == true) {

    console.log("case 3");
    object[id][prop].push(value);
    return object;

  } 
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');