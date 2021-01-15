'use strict'

const url = `https://petstore.swagger.io/v2`;

const petName = document.querySelector("#pet-name");
const petCategory = document.querySelector("#pet-category");

const createEntry = () => {
    console.log(petName.value);
    console.log(petCategory.value);
    fetch(`${url}/pet`, {
        method: 'POST',
        body: JSON.stringify({
            id: Math.floor(Math.random() * 100),
            category: {
                id: 0,
                name: petCategory.value,
            },
            name: petName.value,
            photoUrls: [
                "string"
            ],
            tags: [
                {
                    id: 0,
                    name: "string"
                }
            ],
            status: "available"
        }),
        headers: {
            'Content-type': 'application/json'
        },
    }).then((response) => response.json())
        .then((json) => {
            alert(`Your pet has been Created! \n\n ID: ${json.id}\n Name: ${json.name}\n Category: ${json.category.name}`);
            console.log(json)
        });
}

document.getElementById('crt-pet-btn').addEventListener('click', createEntry);