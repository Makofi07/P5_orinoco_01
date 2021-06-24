//
const urlId = new URLSearchParams(window.location.search).get("id");
console.log(urlId);
const structureProduct = document.querySelector(".productUnique");
const product = {};
let structureOption = [];

function selectedProduct() {
  fetch(`http://localhost:3000/api/teddies/${urlId}`)
    .then((res) => res.json())
    .then((data) => {
      structureProduct.innerHTML += `
       <div id="productLink"  class="product">
                <img id="dataImage" src="${
                  data.imageUrl
                }" alt="" class="data_img" />
                <div class="data_sideBySide">
                    <h2 id="dataName" class="data_name">${data.name}</h2>
                    <span id="dataprice" class="data_price">${
                      data.price / 100
                    }.00 €</span>
                    </div>
                    <p id="dataDescription" class="data_description">${
                      data.description
                    }</p>
                    <label for="text">
                      <select name="option" id="colorSelect" value="">
                        <option value="" class="color_option">Option de couleurs</option>  
                      </select>
                    </label>
              </div>
              `;
      console.log(data.colors);

      // Choix des couleurs
      let colorSelect = document.getElementById("colorSelect");
      let structureOption = [];
      for (let i = 0; i < data.colors.length; i++) {
        console.log(data.colors[i]);
        structureOption += `<option value="${data.colors[i]}" id="option" class="color_option">${data.colors[i]}</option>`;
      }
      colorSelect.innerHTML += structureOption;

      // Ajout dans le DOM du bouton d'ajout au panier
      productLink.insertAdjacentHTML(
        "beforeend",
        '<button id="addToCart">Ajouter au panier</button>'
      );

      // Localstorage stocker les choix des utilisateurs
      // function storeData(data, cart) {
      //   creation de l'Objet infoProduit
      //   let infoProduit = {
      //     name: data.name,
      //     description: data.description,
      //     price: data.price,
      //     id: data._id,
      //     imageUrl: data.imageUrl,
      //   };

      //   let listsProduit = localStorage.getItem("data")
      //     ? JSON.parse(localStorage.getItem("data"))
      //     : [];
      //   listsProduit.push(infoProduit);

      //   let cart = document.querySelector("#addToCart");
      //   cart.addEventListener("click", function () {
      //     console.log("what !");
      //     localStorage.setItem("data", JSON.stringify(listsProduit));
      //     console.log(listsProduit);
      //   });
      // }
    })
    .catch(function (err) {
      console.log("une erreur est survenue");
    });
}

selectedProduct();
