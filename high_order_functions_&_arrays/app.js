const companies = [
  {name: "Los Pollos Hermanos", category: "Food", start: 2009, end: 2017},
  {name: "Daily Bugle", category: "Publishing", start: 1962, end: 2008},
  {name: "Oscorp Industries", category: "Technology", start: 1962, end: 2007},
  {name: "Acme Corporation", category: "Retail", start: 1989, end: 2010},
  {name: "Sirius Cybernetics", category: "Technology", start: 2009, end: 2014},
  {name: "Wonka Industries", category: "Food", start: 1987, end: 2010},
  {name: "Stark Industry", category: "Technology", start: 2001, end: 2020},
  {name: "Shelby LTD.", category: "Finance", start: 1919, end: 1932},
  {name: "Wayne Enterprises", category: "Technology", start: 1995, end: 2020},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
companies.forEach(company => console.log(company));
ages.forEach(age => console.log(age));

// filter
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

const techCompanies = companies.filter(company => company.category === 'Technology');
console.log(techCompanies); 

const oldCompanies = companies.filter(company => company.start < 2000);
console.log(oldCompanies);

const companiesOver10Years = companies.filter(company => (company.end - company.start) > 10);
console.log(companiesOver10Years);

// map
const companyNames = companies.map(company => company.name);
console.log(companyNames);

const companyYears = companies.map(company => `${company.name} (${company.start} - ${company.end})`);
console.log(companyYears);

const agesSquared = ages.map(age => Math.pow(age, 2));
console.log(agesSquared);

// sort
const companiesSortByYear = companies.sort((company1, company2) => (company1.start > company2.start ? 1 : -1));
console.log(companiesSortByYear);

const companiesSortByName = companies.sort((c1, c2) => (c1.name > c2.name ? 1 : -1));
console.log(companiesSortByName);

// const sortAges = ages.sort((age1, age2) => age1 - age2);
// console.log(sortAges);

// reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

const totalYears = companies.reduce((total, year) => total + (year.end - year.start), 0 );
console.log(totalYears);

// combine methods
const combinedMethods = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((age1, age2) => age1 - age2)
  .reduce((total, age) => total + age, 0);

console.log(combinedMethods);


let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce((result, currentPerson) => {
    let age = currentPerson[property]
    if (!result[age]) {
      result[age] = []
    }
    result[age].push(currentPerson)
    return result
  }, {})
}

let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople);

