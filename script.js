
var form = document.getElementById('formRegister');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let userName = document.getElementById("user").value;
    let lastName = document.getElementById("lastName").value;
    let birthdate = document.getElementById("birthdate").value;

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            'Nombre': user,
            'Apellido': lastName,
            'Fecha de nacimiento': birthdate
        }),
        headers: {
            "Content-type": "application/json; charset-UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    });
