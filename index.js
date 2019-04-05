// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
   var band = [];
   for(var i = 0; i < musicians.length; i++){
     band.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return band;
};
function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while (i < facts.length ) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}
function iLoveTheBeatles(n){
  var arr = [];
  var i = 0;
  do {
     i += 1;
     console.log(arr.push("I love the Beatles!"));
  } while (i < 15);
}
