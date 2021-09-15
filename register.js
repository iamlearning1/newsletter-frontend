// const subscribeUrl = 'http://localhost:3000/staging/register';

// const paragraph = document.querySelector('p');
// const button = document.querySelector('button');
// const input = document.querySelector('input');

// let email = '';

// input.addEventListener('input', function (event) {
//   button.disabled = !validator.isEmail(event.target.value.trim());
//   email = event.target.value.trim();
// });

// button.addEventListener('click', async function () {
//   paragraph.innerText = 'Please wait while we subscribe you';

//   try {
//     const result = await axios({
//       method: 'POST',
//       url: subscribeUrl,
//       data: { email },
//     });

//     paragraph.innerText = result.data.message;
//     input.value = '';
//   } catch (error) {
//     paragraph.innerText = error.response.data.message;
//     input.value = '';
//   }
// });

const cheerio = require('cheerio');
const axios = require('axios');

// (async () => {
//   const { data } = await axios.get(
//     'https://www.hollywoodreporter.com/lists/netflix-november-2020-new-releases-movies-tv'
//   );
//   const $ = cheerio.load(data);

//   const netflixMoviesByDate = {};

//   const list = $('.list--unordered__items li');
//   list.each(function (index, elem) {
//     const date = $(this).find('h1.list-item__title').text();
//     const movies = $(this).find('div > p > em');

//     movies.each(function () {
//       const movie = $(this).text();
//       if (date in netflixMoviesByDate) netflixMoviesByDate[date].push(movie);
//       else netflixMoviesByDate[date] = [];
//     });
//   });

//   console.log('netflixMoviesByDate', netflixMoviesByDate);
// })();

(async () => {
  const { data } = await axios.get(
    'https://www.worldometers.info/coronavirus/country/india/'
  );
  const $ = cheerio.load(data);

  const covid = {};

  const list = $('#maincounter-wrap');
  list.each(function (index, elem) {
    const title = $(this).find('h1').text();
    const count = $(this).find('div > span').text();

    covid[title] = Number(count.replace(/[,]/g, ''));
  });

  console.log('covid', covid);
})();
