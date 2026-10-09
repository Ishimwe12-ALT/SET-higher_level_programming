#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const film = JSON.parse(body);
  const characters = film.characters;

  function printCharacter (index) {
    if (index >= characters.length) {
      return;
    }
    request(characters[index], (charErr, charRes, charBody) => {
      if (charErr) {
        console.error(charErr);
        return;
      }
      const character = JSON.parse(charBody);
      console.log(character.name);
      printCharacter(index + 1);
    });
  }

  printCharacter(0);
});
