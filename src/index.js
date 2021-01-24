const URL = 'http://localhost:3000/dogs'

document.addEventListener('DOMContentLoaded', () => {

    getDogs()
    //createDogTable()

})

function getDogs(){
    fetch(URL)
        .then(response => response.json())
        .then(dogsData => dogsData.forEach(dog => createDogTable(dog)))
        


}

// function renderDogs(dog){
// // console.log(dog)

// }

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
   
   tableRow.append(tableDataName, tableDataBreed, tableDataSex, tableDataButton)
}


