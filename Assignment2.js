function ageCalculator(birthYear, futureYear){
let age = futureYear - birthYear;
console.log(`I was born in ${birthYear}, then in ${futureYear} I'll be ${age} or ${age+1} (depending on the month in ${futureYear}).` );
}
ageCalculator(1997,2030);