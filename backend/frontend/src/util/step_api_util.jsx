export async function fetchSteps (id) {

    // Get the steps - will be returned in array format
    let data = await (await fetch(`api/steps/${id}`)).json();
    return new Promise((success, failure) => {
        success(data);
    })
}

export async function createStep (step) {
    let csrfToken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
    let response = await fetch("api/step/", {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, 
            mode: 'same-origin',
          },
        body:JSON.stringify(step),
    })

    return new Promise((success, failure) => {
        success(step)

    })
    
}

export async function deleteStep(id) {
    let csrfToken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
    let response = await fetch(`api/step/${id}`, {
        method:"DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, 
            mode: 'same-origin',
          },
    })

    return new Promise( (success, failure) => {
        success(id);
    })
}
