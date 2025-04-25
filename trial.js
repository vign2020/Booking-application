const str = new Date("Thu Apr 26 2025 11:00 GMT+0530");
console.log(str.toString());

// console.log(str.toISOString());

// Tue Apr 08 2025 00:00:00 GMT+0530

const isoDate = str.toISOString();
console.log("iso date : " + isoDate);
// const date = new Date();
// console.log("date now is " + date.getTime());

//converting utc to ist
//steps :
// 1. convert from utc to ist then ist to iso format
// 2 . convert from 24hr to 12hr format
// 3. append time to the date string
