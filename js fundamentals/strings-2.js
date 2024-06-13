const browserType = 'mozilla';
browserType.length;
console.log(browserType.slice(2))
const updated = browserType.replace("moz", "van")

if (browserType.includes('zilla')){
  console.log('found zilla');
} else{
  console.log('no zilla!')
}

if (browserType.startsWith('zilla')){
  console.log('found zilla')
} else{
  console.log('no zilla here!')
}

if (browserType.endsWith('zilla')){
  console.log('found zilla!')
} else{
  console.log('no zilla here!');
}

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'))

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
console.log(updated)

const list = document.querySelector('.output ul');
list.innerHTML = '';
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // write your code just below here
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0,1)
  const capitalisation = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = city;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

