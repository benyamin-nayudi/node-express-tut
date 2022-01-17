fetch("http://localhost:4000/homepage" , {method: 'PUT'})
    .then(res => res.json())
    .then(res => console.log(res))