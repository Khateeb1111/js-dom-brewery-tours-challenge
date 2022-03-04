const selectStateForm = document.querySelector("#select-state-form");
const selectState = document.querySelector("#select-state");
const breweriesList = document.querySelector("#breweries-list");

const state = {
  breweries: [],
};

selectStateForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let url = "https://api.openbrewerydb.org/breweries?by_state=";

  const searchResult = selectState.value;
  console.log(searchResult);

  //     list.value
  fetch(url + searchResult)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (breweries) {
      state.breweries = breweries;
      console.log("who are u?", state.breweries);
      render();
    });
});

// const brew = {
//     name: selectStateForm.name.value
// }

function renderBreweries() {
  for (const brewery of state.breweries) {
    const liEl = document.createElement("li");
    liEl.innerHTML = `<h2>${brewery.name}</h2>
    <div class="type">${brewery.brewery_type}</div>
    <section class="address">
        <h3>Address:</h3>
        <p>${brewery.street}</p>
        <p><strong>${brewery.city}, ${brewery.postal_code}</strong></p>
    </section>
    <section class="phone">
        <h3>Phone:</h3>
        <p>${brewery.phone}</p>
    </section>
    <section class="link">
        <a href=${brewery.website_url} target="_blank">Visit Website</a>
    </section>`
    breweriesList.append(liEl)
  }
}
  

function render() {
  renderBreweries();
  clear();
}

function clear() {
  liEl.innerHTML = ''
}