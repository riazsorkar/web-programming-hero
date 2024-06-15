const ApiAccess = document.getElementById("click")

const AccesData("ApiAccess"){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

}

