
function shout(myString) {
  return myString.toUpperCase();
}

function whisper(myString) {
  return myString.toLowerCase();
}

function logShout(myString) {
  console.log(myString.toUpperCase());
}

function logWhisper(myString) {
  console.log(myString.toLowerCase());
}

function sayHiToHeadphonedRoommate(myString) {
  const lowerstring = "I can\'t hear you!";
  const upperstring = "YES INDEED!";
  const dinnerstring = "I would love to!";
  if (myString == myString.toLowerCase()) {
    return lowerstring
  }
  else if (myString == myString.toUpperCase()) {
    return upperstring;
  }
  else if (myString == "Let's have dinner together!") {
    return dinnerstring
  }
}
