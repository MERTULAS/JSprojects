const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

  const fifteens = inventors.filter(inventor => {
      if(inventor.year >= 1500 && inventor.year < 1600){
          return true;
      }
  });

  // OR

  const fifteens2 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  console.table(fifteens2);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = inventors.map(inventor => [inventor.first, inventor.last]);
console.table(names);

// OR

const names2 = inventors.map(inventor => inventor.first + " " + inventor.last);
console.table(names2);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort((a, b) => {
    if (a.year > b.year) return 1;
    else return -1;
})
console.log(ordered);

// OR

const ordered2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered2);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived

const orderedOldest = inventors.sort((a, b) => {
    let aLived = a.passed - a.year;
    let bLived = b.passed - b.year;
    return aLived > bLived ? -1 : 1;
});

console.log(orderedOldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*
const element = document.querySelector(".mw-category");
const links = element.querySelectorAll("a");
const de = Array.from(link).map((lin) => lin.textContent).filter(streetName => streetName.includes("de"));
*/

// 7. sort Exercise
// Sort the people alphabetically by last name

const orderedNames = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(",");
    const [bLast, bFirst] = nextOne.split(",");
    return aLast > bLast ? 1 : -1;
})

console.log(orderedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);

const people2 = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const some = people2.some(p => {
        return (new Date()).getFullYear() - p.year >= 19;
});
console.log(some);

// Array.prototype.every() // is everyone 19 or older?
const every = people2.every(p => {
    return (new Date()).getFullYear() - p.year >= 19;
});
console.log(every);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const find = comments.find(comment => comment.id == 823423);
console.log(find);

// Array.prototype.findIndex()
// Find the comment with this ID
const indexNumber = comments.findIndex(comment => comment.id == 823423);
console.log(indexNumber);

// delete the comment with the ID of 823423
const deleted = comments.splice(indexNumber, 1);
console.log(deleted);
console.log(comments);

// OR

const newComments = [
    ...comments.slice(0, indexNumber),
    ...comments.slice(indexNumber + 1)
]
console.log(newComments);
