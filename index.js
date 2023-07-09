// Add your code here

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify({
            'name' : name,
            'email' : email
        })
    })
    .then(res => res.json())
    .then(user => appendID(user))
    .catch(error => appendError(error))
}

function appendID(user){
    const id = document.createElement('p');
    id.innerHTML = user.id;
    document.querySelector('body').appendChild(id);
}

function appendError(error){
    const problem = document.createElement('p');
    problem.innerHTML = error.message;
    document.querySelector('body').appendChild(problem);
}