/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 31/366
Challenge 2024 31. bonusTime
==============
*/

/* 
function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10).toString();
  }
  return "£" + salary.toString();
}
*/

const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;
console.log(bonusTime(10000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(25000, true));
console.log(bonusTime(25000, false));
