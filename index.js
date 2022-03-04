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

const brew = {
    name: selectStateForm.name.value
}

function renderBreweries() {
  for (const brewery of state.breweries) {
    const liEl = document.createElement("li");
    liEl.innerHTML
  }

}

function render() {
  renderBreweries();
//   clear();
}
