'use strict'

const url = "https://petstore.swagger.io/v2/pet/";

const deleteEntry = () => {
    fetch(getDeleteUrl(), {
        method: "DELETE",
        api_key: "special-key"
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(`Something went wrong`));
}

const getDeleteUrl = () => {
    let petId = document.querySelector("#delete_petId");
    return url + petId.value;
}

const deleteButton = document.querySelector("#deletebutton");
deleteButton.addEventListener('click', deleteEntry);