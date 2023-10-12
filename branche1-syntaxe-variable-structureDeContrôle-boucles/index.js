const ingredients = ['Pâtes', 'Oeufs', 'Sel', 'Poivre', 'Lardons', 'Oignons', 'Parmesan']
console.log(`Le nombre d'ingrédients requis est de ${ingredients.length}`)

document.getElementById("number").innerHTML=ingredients.length;
document.getElementById("ingredient-list").innerHTML=ingredients.join(" - ");

const ingredientList = document.getElementById("ingredient-list");

if(ingredientList) {
    ingredients.sort();
    const ol = document.createElement("ol");
    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerHTML = ingredient;
        ol.appendChild(li);
    });
    ingredientList.appendChild(ol);
}