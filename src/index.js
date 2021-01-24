const URL = 'http://localhost:3000/dogs'
// const dogForm = document.querySelector('#dog-form')

document.addEventListener('DOMContentLoaded', () => {

    getDogs()

})

function getDogs(){
    fetch(URL)
        .then(response => response.json())
        .then(dogsData => dogsData.forEach(dog => createDogTable(dog)))
    
}

function createDogTable(dog){
   let table = document.querySelector('#table-body')

   let tableRow = document.createElement('tr')
   table.appendChild(tableRow)
   
   let tableDataName = document.createElement('td')
   tableDataName.innerText = dog.name
   
   let tableDataBreed = document.createElement('td')
   tableDataBreed.innerText = dog.breed

   let tableDataSex = document.createElement('td')
   tableDataSex.innerText = dog.sex
   
   let tableDataButton = document.createElement('button')
   tableDataButton.innerText = "Edit Dog"
   tableDataButton.addEventListener('click', (event) => {
       editDog(dog)
   })
   
   tableRow.append(tableDataName, tableDataBreed, tableDataSex, tableDataButton)
}

function editDog(dog){

    const dogForm = document.querySelector('#dog-form')
    dogForm.name.value = dog.name
    dogForm.breed.value =dog.breed
    dogForm.sex.value =dog.sex

    dogForm.addEventListener('submit', (event) => {
        event.preventDefault()
        dogPatch(dog, event)
    })
    
}

function dogPatch(dog, event){

    let newUpdate = {
        name: event.target.name.value, 
        breed: event.target.breed.value, 
        sex: event.target.sex.value 
    }

    let reqPack = {
        header: {"Content-Type": "application/json", "Accept": "application/json"},
        method: "PATCH",
        body: JSON.stringify(newUpdate)
    }

    fetch(URL+`/${dog.id}`, reqPack)
        .then(resp => resp.json())
        .then(updatedDog => createDogTable(updatedDog))

}