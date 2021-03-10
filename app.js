console.log("JxNotes");

// showNotes()
// let addBtn = document.getElementById('addBtn'); //SELECT BUTTON
// addBtn.addEventListener("click", function(){    // ADD EVENT LISTENER

//     let addTxt = document.getElementById('addTxt') //SELECT TEXT AREA
//     let notes = localStorage.getItem("notes");   //CREATE NOTES VAT
//     if (notes == null){  //CHECK IF NOTES IS NOT NULL
//         notesObj = [];   //CREATE EMPTY ARRAY
//     }
//     else{
//         notesObj = JSON.parse(notes);  //ELSE PARSE NOTES IN ARRAY
//     }
//     notesObj.push(addTxt.value); //PUSH ARRAY IN NOTES
//     localStorage.setItem("notes", JSON.stringify(notesObj)) //SET ARRAY NOTES TO LOCALSTORAGE
//     addTxt.value = "";   //SET ADD TEXT AS EMPTY
//     console.log(notesObj); 
//     showNotes()
// })

// function showNotes() { //CREATE FUNCTION FOR SHOW NOTES
//     let notes = localStorage.getItem("notes"); //GET NOTES FROM LOCAL STORAGE
//     if (notes == null) { //CHECK IF NOT NULL
//         notesObj = []   //CREATE NOTES ARRAY
//     }
//     else {
//         notesObj = JSON.parse(notes) //ELSE PARSE NOTES TO ARRAY
//     }

//     let notesCards = "";    //CREATE EMPTY NOTES CARD VAR
//     notesObj.forEach(function (element, index) { //FOREACH LOOP FOR NOTES
//         notesCards += `                        
//                     <div class="notesCard mx-2" style="width: 18rem;">
//                        <div class="card-body mx-2">
//                     <h5 class="card-title">Note ${index + 1}</h5>
//                     <p class="card-text">${element}</p>
//                     <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-outline-danger">Delete Note</button>
//                 </div>
//             </div>
//         `
//     });
//     let notesElement = document.getElementById('notes'); //SET NOTES ID
//     if (notesObj.length != 0) { //CHECK IF NOTES ARE NULL
//         notesElement.innerHTML = notesCards; //APPEND HTML TO CARDS
//     }
//     else { //ELSE SHOW ALERT 
//         notesElement.innerHTML = `
//                                 <div class="alert alert-primary" role="alert">
//                                     Start Adding Your Notes..!!!
//                                 </div>
//                             `
//     }

// }

// function deleteNotes(index){
//   let notes = localStorage.getItem("notes"); //GET NOTES FROM LOCAL STORAGE
//   if (notes == null) { //CHECK IF NOT NULL
//     notesObj = []   //CREATE NOTES ARRAY
//   }
//   else {
//     notesObj = JSON.parse(notes) //ELSE PARSE NOTES TO ARRAY
//   }

//   notesObj.splice(index, 1); //TO DELETE NOTES INDEX 
//   localStorage.setItem("notes", JSON.stringify(notesObj)) //SET NOTES TO LOCALSTORAGE
//   showNotes() 

// }

// let searchTxt = document.getElementById("searchTxt");   //TARGET SEARCH BUTTON
// searchTxt.addEventListener("input", function(){  //ADD EVENT LKISTENER ON SEARCH BUTTON

//   let inputVal = searchTxt.value.toLowerCase();  //FETCH VALUES FROM SEARCH INPUT
//   let notesCard = document.getElementsByClassName("notesCard") //TARGET NOTESCARD
//   Array.from(notesCard).forEach(function(element){ //FETCH ALL ELEMENT USING ARRAY 
//     let cardTxt = element.getElementsByTagName("p")[0].innerText; //FIND MATCHES 
//     if (cardTxt.includes(inputVal)){ 
//       element.style.display = "block"
//     }
//     else{
//       element.style.display = "none"
//     }
//   })
// })

// --------------------------------------------------------------------------------------------------------
showNotes()
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e){

  let addTxt = document.getElementById("addTxt")
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = []
  }
  else{
    notesObj = JSON.parse(notes)
  }

  notesObj.push(addTxt.value)
  localStorage.setItem("notes", JSON.stringify(notesObj))
  addTxt.value = ""
  showNotes()
  console.log(notesObj);
})

function showNotes(){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = []
  }
  else {
    notesObj = JSON.parse(notes)
  }

  html = ""
  notesObj.forEach(function(element, index){
    html += ` <div class="notesCard mx-2" style="width: 18rem;">
                        <div class="card-body mx-2">
                     <h5 class="card-title">Note ${index + 1}</h5>
                     <p class="card-text">${element}</p>
                     <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-outline-danger">Delete Note</button>
                 </div>
             </div>`
  })

  notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
      notesElm.innerHTML = html
    }
    else {
      notesElm.innerHTML = "Add some Notes"

    }
}


function deleteNotes(index){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = []
  }
  else {
    notesObj = JSON.parse(notes)
  }
  notesObj.splice(index, 1)
  localStorage.setItem("notes", JSON.stringify(notesObj))
  showNotes()
} 

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){
  let searchVal = searchTxt.value.toLowerCase()
  let notesCard = document.getElementsByClassName("notesCard")
  Array.from(notesCard).forEach(function(element){
  let cardTxt = element.getElementsByTagName("p")[0].innerText
  if(cardTxt.includes(searchVal)){
    element.style.display = "block"
  }
  else{
    element.style.display = "none"

  }
  })
})
