async function fetchbooze() {
  
  try {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
      console.log(error);
  }
}


//fetchbooze().then((results) => console.log(results));

async function renderdrinks() {

  const seld = document.getElementById("select-drinks");
  
  const list = await fetchbooze();
  
  if (list) 
  {
        list.forEach((item) => 
        {  
           const optdrink = document.createElement("option");
           optdrink.textContent = item.strDrink;
           optdrink.id = item.strDrink;
           optdrink.value = item.strInstructions;

           seld.appendChild(optdrink);
        }
  );
  
  }
  }

  async function submitButtonClickHandler() {
      const seld = document.getElementById("select-drinks");
      const pInstructions = document.getElementById("pInstructions");
      pInstructions.innerText = document.getElementById("select-drinks").value;
  }

    async function selectListChangeHandler(){
      const seld = document.getElementById("select-drinks");
      const pInstructions = document.getElementById("pInstructions");
      pInstructions.innerText = document.getElementById("select-drinks").value;
}

  renderdrinks();

  const submitButton = document.getElementById('submit-button');

  submitButton.addEventListener('click', submitButtonClickHandler);

  const seld = document.getElementById("select-drinks");

  seld.addEventListener('change', selectListChangeHandler);