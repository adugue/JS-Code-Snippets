console.log();





  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }





    if (prop != "tracks") {

  } else if (prop == "tracks" && )) {
    object.id.prop[] = value;

  } else if (prop == "tracks" && )
  return object;



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
    console.log(object[id].prop);
    delete object[id].prop;
    console.log(object[id].prop);
    return object;
  } else if (prop != "tracks") {
    console.log("case 1");
    object[id].prop = value;
    console.log(object[id].prop);
    return object;
  } else if (prop == "tracks" && propExist == false) {
    console.log("case 2");
    object[id].prop = "Untitled Track";
    console.log(object[id].prop);
    return object;
  } else if (prop == "tracks" && propExist == true) {

    console.log("case 3");
    return object;
  } 
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');
console.log("____________________________");
updateRecords(collection, 2548, 'tracks', 'asdgdff');
console.log("____________________________");
updateRecords(collection, 5439, 'tracks', 'asddddddf');
console.log("____________________________");
updateRecords(collection, 5439, 'tracks', '');