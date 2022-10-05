let btn = document.querySelector("button"); //Je récupère le bouton
let section = document.querySelector("section"); //Je récupère la section
let input = document.querySelector("#todo"); // Je récupère l'input
let h1 = document.querySelector("h1"); // je récupère le titre

let div = document.createElement("div"); // Je crée une div pour le message d'alerte
let p = document.createElement("p"); // Je crée un élément p qui contiendra le texte

// Je pose mon écouteur sur le bouton

btn.addEventListener("click", function () {
  let uneTache = document.createElement("p");

  let tache = input.value.trim();

  console.log(tache);

  if (tache !== "") {
    uneTache.classList.add("text-capitalize"); // Je mets le texte en capitalise
    uneTache.innerText = tache; // J'ajoute le texte dans la balise p
    section.appendChild(uneTache); // Puis j'ajoute ma tache dans la section

    input.value = ""; // Je vide mon input

    div.classList.add("alert"); // j'ajoute la boite d'alerte
    div.classList.add("alert-success"); // J'ajoute la couleur de l'alerte
    p.textContent = "Nouvelle tache ajouter à votre To Do"; // j'ajoute le texte
    div.appendChild(p); // je mets mon texte dans la div
    h1.appendChild(div); // J'ajoute ma div à mon h1
    div.classList.remove("alert-danger"); // Je supprime la classe alert-danger

    uneTache.addEventListener("click", function () {
      uneTache.classList.add("text-muted");
      uneTache.classList.add("text-decoration-line-through");

      div.classList.add("alert"); // j'ajoute la boite d'alerte
      div.classList.add("alert-primary"); // J'ajoute la couleur de l'alerte
      p.textContent = "Tache faite"; // j'ajoute le texte
      div.appendChild(p); // je mets mon texte dans la div
      h1.appendChild(div); // J'ajoute ma div à mon h1
      div.classList.remove("alert-success"); // Je supprime la classe alert-success
      div.classList.remove("alert-danger"); // Je supprime la classe alert-danger
    });

    uneTache.addEventListener("dblclick", function () {
      // Je gère la sup
      //section.removeChild(uneTache); // Supprime l'enfant

      uneTache.style.display = "none"; // cache l'enfant
    });
  } else {
    div.classList.add("alert"); // j'ajoute la boite d'alerte
    div.classList.add("alert-danger"); // J'ajoute la couleur de l'alerte
    p.textContent = "Vous devez ajouter une tache à votre to do"; // j'ajoute le texte
    div.appendChild(p); // je mets mon texte dans la div
    h1.appendChild(div); // J'ajoute ma div à mon h1
    div.classList.remove("alert-success"); // Je supprime la classe alert-success
  }
});
