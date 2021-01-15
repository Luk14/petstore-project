const petId = document.querySelector("#delete_petId");
const url = "https://petstore.swagger.io/v2/pet/" + petId.value;
console.log(url);

const deleteEntry = () => {
    fetch(url, {
        method: "DELETE",
        api_key: "special-key"
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(`Something went wrong`));
}

const deleteButton = document.querySelector("#deletebutton");
deleteButton.addEventListener('click', deleteEntry);