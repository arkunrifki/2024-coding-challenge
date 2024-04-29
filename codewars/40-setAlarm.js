// Learn Data Structure with JavaScript
// Coding Challenge 2024 30/366
// Challenge 2024 30. setAlarm

/* 

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false 

*/

/* 
function setAlarm(employed, vacation) {
  if (employed) {
    if (vacation) {
      return false;
    } else {
      return true;
    }
  } else {
    if (vacation) {
      return false;
    } else {
      return true;
    }
  }
  return setAlarm;
} 
*/

/* 
const setAlarm = (employed, vacation) => employed && !vacation;
 */
const setAlarm = (employed, vacation) => employed < vacation;

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
