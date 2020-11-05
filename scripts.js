const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
  recipe.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        const imgId = recipe.getAttribute('id');
        const cardName = recipe.querySelector('.recipe-name').querySelector('p').textContent;
        const madeBy = recipe.querySelector('.recipe-author').querySelector('p').textContent;
        modalOverlay.querySelector('img').src = `/layouts/assets/${imgId}.png`;
        modalOverlay.querySelector('#nome_receita').textContent = cardName;
        modalOverlay.querySelector('#chef_receita').textContent = madeBy
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector('img').src= "";
})

