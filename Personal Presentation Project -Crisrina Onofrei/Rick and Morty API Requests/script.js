function fetchData(url) {
  return fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
}

function getCharacterData(characterId) {
  const url = `https://rickandmortyapi.com/api/character/${characterId}`;
  fetchData(url)
      .then(function (character) {
          const characterTable = document.querySelector("#characters tbody");
          characterTable.innerHTML = `
              <tr>
                  <td>${character.id}</td>
                  <td>${character.name}</td>
                  <td>${character.status}</td>
                  <td>${character.species}</td>
                  <td>${character.type}</td>
                  <td>${character.gender}</td>
                  <td>${character.origin.name}</td>
              </tr>
          `;
      });
}

function getCharactersData() {
  const url = "https://rickandmortyapi.com/api/character/";
  fetchData(url)
      .then((characters) => {
          const charactersTable = document.querySelector("#characters tbody");
          charactersTable.innerHTML = characters.results
              .map(
                  (character) => `
                      <tr>
                          <td>${character.id}</td>
                          <td>${character.name}</td>
                          <td>${character.status}</td>
                          <td>${character.species}</td>
                          <td>${character.type}</td>
                          <td>${character.gender}</td>
                          <td>${character.origin.name}</td>
                      </tr>
                  `
              )
              .join("");
      });
}

function getLocationData() {
  const locationId = 1;
  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  fetchData(url)
      .then((location) => {
          const locationTable = document.querySelector("#locations tbody");
          locationTable.innerHTML = `
              <tr>
                  <td>${location.id}</td>
                  <td>${location.name}</td>
                  <td>${location.type}</td>
                  <td>${location.dimension}</td>
                  <td>${location.residents.length}</td>
                  <td>${location.url}</td>
                  <td>${location.created}</td>
              </tr>
          `;
      });
}

function getLocationsData() {
  const url = "https://rickandmortyapi.com/api/location/";
  fetchData(url)
      .then((locations) => {
          const locationsTable = document.querySelector("#locations tbody");
          locationsTable.innerHTML = locations.results
              .map(
                  (location) => `
                      <tr>
                          <td>${location.id}</td>
                          <td>${location.name}</td>
                          <td>${location.type}</td>
                          <td>${location.dimension}</td>
                          <td>${location.residents.length}</td>
                          <td>${location.url}</td>
                          <td>${location.created}</td>
                      </tr>
                  `
              )
              .join("");
      });
}

function getEpisodeData() {
  const episodeId = 1;
  const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  fetchData(url)
      .then(function (episode) {
          const episodeTable = document.querySelector("#episodes tbody");
          episodeTable.innerHTML = `
              <tr>
                  <td>${episode.id}</td>
                  <td>${episode.name}</td>
                  <td>${episode.air_date}</td>
                  <td>${episode.episode}</td>
                  <td>${episode.characters}</td>
              </tr>
          `;
      });
}

function getEpisodesData() {
  const url = "https://rickandmortyapi.com/api/episode/";
  fetchData(url)
      .then((episodes) => {
          const episodesTable = document.querySelector("#episodes tbody");
          episodesTable.innerHTML = episodes.results
              .map(
                  (episode) => `
                      <tr>
                          <td>${episode.id}</td>
                          <td>${episode.name}</td>
                          <td>${episode.air_date}</td>
                          <td>${episode.episode}</td>
                          <td>${episode.characters}</td>
                      </tr>
                  `
              )
              .join("");
      });
}

getCharactersData();
getLocationsData();
getEpisodeData();
getEpisodesData();
