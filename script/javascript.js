const url = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas?_limit=3"
const carousel = document.querySelector(".carousel-inner")

async function carregarReceitas()
{
    const response = await fetch(url)
    const data = await response.json()

    data.forEach(receita => {
        carousel.innerHTML += `
            <div class="carousel-item">
                <img src="${receita.imagem}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${receita.nome}</h5>
                </div>
            </div>
        `
    })

    carousel.children[0].classList.add("active")

}

window.onload = carregarReceitas