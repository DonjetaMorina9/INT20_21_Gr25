


const butoni = document.querySelectorAll(".btn");
const ndarjafotove = document.querySelectorAll(".foto");


for (i = 0; i < butoni.length; i++) {
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        ndarjafotove.forEach((product) => {
            if (filter === "tegjitha") {
                product.style.display = "block";
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }
        });
    });
};

const name = document.getElementById('fname')
const  password = document.getElementById('password')
const  form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (f) =>
{
    let messages = []
    if(name.value === '' || name.value == null)
    {
        messages.push('Ju lutem sigurohuni qe keni plotesuar numrin e xhirollogaris dhe shumen qe doni te dononi')
    }
    if ( messages.length>0 ){
    f.preventDefault()
    errorElement.innerText = messages.join(' , ')
    }
});