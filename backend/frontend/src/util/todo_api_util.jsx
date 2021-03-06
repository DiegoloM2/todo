export async function fetchTodos () {
    let data = await (await fetch("api/todo/")).json();
    return new Promise((success, failure) => {
        success(data);
    })
}

export async function createTodo (todo) {
    let csrfToken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
    let response = await fetch("api/todo/", {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, 
            mode: 'same-origin',
          },
        body:JSON.stringify(todo),
    })

    return new Promise((success, failure) => {
        success(todo)

    })
    
}

export async function deleteTodo(id) {
    let csrfToken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
    let response = await fetch(`api/todo/${id}`, {
        method:"DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, 
            mode: 'same-origin',
          },
    })

    return new Promise( (success, failure) => {
        success();
    })
}

// export async function updateTodo (todo) {
//     let csrfToken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
//     let response = await fetch("api/todo/", {
//         method:"PUT", 
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrfToken, 
//             mode: 'same-origin',
//           },
//         body:JSON.stringify(todo),
//     })

//     return new Promise((success, failure) => {
//         success(todo)

//     })
// } 