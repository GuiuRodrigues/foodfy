const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const imgId = recipe.getAttribute('id');
        window.location.href = `/recipe?id=${imgId}`
    })
}

const esconderButton = document.querySelector('.text')
const buttons = document.querySelectorAll('.esconder')


for (let button of buttons) {
    button.addEventListener("click", function() {
        esconderButton.classList.add('active')

    })

}
document.querySelector(".mostrar").addEventListener("click", function() {
    esconderButton.classList.remove('active')
})