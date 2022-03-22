import { BASE_URL } from './api';
import { orderBy } from 'lodash';
import { query } from './api/query.graphql';

console.log(query);

const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();

  console.log(data.data.Page.media);
  const array = data.data.Page.media;
  const orderedData = orderBy(array, ['seasonYear'], ['asc']);
  console.log(orderedData);

  orderedData.map((elm) => {
    document.querySelector('.results').innerHTML += `
    <div class="card">
      <h1>${elm.title.english ? elm.title.english : elm.title.native}</h1>
      <p>Year: ${elm.seasonYear}</p>
      <img src="${elm.coverImage.medium}" alt="image of anime cover">
    <div>
    `;
  });

  return data;
};

getData();
