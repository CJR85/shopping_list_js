const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

// socials.forEach(logSocials);

const socialObjs = [
  { name: 'twitter', url: 'http://twitter.com' },
  { name: 'facebook', url: 'http://facebook.com' },
  { name: 'linkedin', url: 'http://linkedin.com' },
  { name: 'instagram', url: 'http://instagram.com' },
];

socialObjs.forEach((item) => console.log(item));
