const divs = document.getElementById('divs');
var con = 0

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            return res.json();
        })
        .then((post) => {
            for (var index = 0; index < 1; index++) {
                divs.innerHTML += `<div class="card  mx-auto mt-2">
        <img class="card-img-top" src="${post[con].thumbnailUrl}">
        <div class="card-body">
        <h5 class="card-title">${post[con].id}</h5>
        <p class="card-text">${post[con].title}</p>
        <a style="text-decoration:none;font-weight:600;color:green;" class="text-dark" href="${post[con].url}">Visit our website</a>
        </div>
        </div>`

                con = con + 1;
            }
        })
        .catch((error) => {
            console.log(error)

        })

}