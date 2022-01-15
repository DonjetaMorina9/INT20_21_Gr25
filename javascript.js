


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



var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);                   //posts a message back to the HTML page.
    setTimeout("timedCount()",1000);
} 
timedCount();




