/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 45/366
Challenge 2024 44. areYouPlayingBanjo
=======================================
*/

/* 

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

*/

// const areYouPlayingBanjo = (name) =>
//   name[0].toLowerCase() === "r"
//     ? name + " plays banjo"
//     : name + " does not play banjo";

function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}
console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
