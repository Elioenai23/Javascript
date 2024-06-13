const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini'
console.log(shopping);

const sequence = [1,1,2,3,4,8,13];
const random = ['tree', 795, [0,1,2]];
console.log(random[2][2]);

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));
console.log(birds.indexOf('Rabbit'));

for(const bird of birds){
  console.log(bird)
}

const city = ['Manchester', 'Liverpool'];
city.push('Cardiff');
console.log(city);
city.push('Bradford', 'Brighton');
console.log(city)
const newLength = city.push('Bristol');
console.log(city);
console.log(newLength)
city.unshift('Edinburgh');
console.log(city);
city.pop();
console.log(city)
const removedCity = city.pop();
console.log(removedCity);
city.shift();
console.log(city)
const index = city.indexOf('Liverpool');
if ( index !== -1){
  city.splice(index, 2)
}
console.log(city)

function double(number){
  return number * 2;
}

const numbers = [5,2,7,6];
const doubled = numbers.map(double);
console.log(doubled);

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'
const cities = data.split(',')
cities.length;
cities[0];
cities[1];
cities[cities.length -1];

const commaSeparated = cities.join(',');
commaSeparated;

const dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
dogNames.toString();