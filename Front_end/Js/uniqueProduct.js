main();

async function main() {
  const data = await fetchUniqueProduct();

  displayUniqueProduct(data);
}

function fetchUniqueProduct() {
  // recupérer la queystring de l'ID
  const urlId = new URLSearchParams(window.location.search).get("id");
  return fetch(`http://localhost:3000/api/teddies/${urlId}`)
    .then(function (httpBodyResponse) {
      return httpBodyResponse.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.log("Une erreur est survenue");
    });
}

function displayUniqueProduct(data) {
  const templateElt = document.getElementById("productUniqueTemplate");
  const clone = document.importNode(templateElt.content, true);
  clone.getElementById("dataImage").src = data.imageUrl;
  clone.getElementById("dataName").textContent = data.name;
  clone.getElementById("dataPrice").textContent = `${data.price / 100}.00 €`;

  clone.getElementById("dataDescription").textContent = data.description;
  document.getElementById("productUnique").appendChild(clone);

  //Choix des couleurs
  let colorSelect = document.getElementById("colorSelect");
  console.log(colorSelect);
  let structureOption = [];
  for (let i = 0; i < data.colors.length; i++) {
    console.log(data.colors[i]);
    structureOption += `<option value="${data.colors[i]}" id="option" class="color_option">${data.colors[i]}</option>`;
  }
  colorSelect.innerHTML += structureOption;

  // Version Denis
  let cart = document.getElementById("addToCart");
  cart.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("hi !");
    let infoProduit = {
      name: data.name,
      description: data.description,
      price: data.price,
      id: data._id,
      imageUrl: data.imageUrl,
    };

    let listsProduit = JSON.parse(localStorage.getItem("data"));

    const confirm = () => {
      if (
        window.confirm(
          `La peluche ${data.name}  : a bien été ajouté au panier. Voir mon panier OK ou continuer mes achats ANNULER`
        )
      ) {
        window.location.href = "cart.html";
      } else {
        window.location.href = "index.html";
      }
    };

    function addProductStorage() {
      listsProduit.push(infoProduit);
      localStorage.setItem("data", JSON.stringify(listsProduit));
    }

    if (listsProduit) {
      addProductStorage();
      confirm();
    } else {
      // sinon
      listsProduit = [];
      addProductStorage();
      confirm();
    }
  });

  // Version Saliha
  // Cette partie est en phase de test à moi d'essayer davancer.
  // Localstorage stocker les choix des utilisateurs
  // function storeData(data, cart) {
  //   let cart = document.querySelector("#addToCart");
  //   //creation de l'Objet infoProduit
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

  //   cart.addEventListener("click", function () {
  //     console.log("what !");
  //     localStorage.setItem("data", JSON.stringify(listsProduit));
  //     console.log(listsProduit);
  //   });
  // }

  //evenement au click
  // document.getElementById("addToCart").addEventListener("click", function () {
  //   console.log("what !");
  //   //redirectToShoppingCart(data.name); fonction de redirection
  // });
  //  La redirection contient "addedProduct" est lié à une fonction que je n'ai pas mise en place
  // function redirectToShoppingCart(dataName) {
  //   window.location.href = `${window.location.origin}/cart.html?lastAddedProductName=${dataName}`;
  // }
}
