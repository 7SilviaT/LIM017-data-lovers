/* eslint-disable no-console */
/* eslint-disable no-undef */
import {sortMovies , filterByGender, computeStats} from "./data.js";
import data from "./data/ghibli/ghibli.js";
console.log (computeStats);


//console.log (sortMovies)

//boton pagina 1,nos lleva a pagina 2
let btnMoreInf = document.getElementById("btnMoreInf");
btnMoreInf.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="none";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";
})


let btnMoreInf2 = document.getElementById("btnMoreInf2");
btnMoreInf2.addEventListener("click",()=>{
const pageOne=document.getElementById("pageOne");
pageOne.style.display="none";
const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
const pageFour=document.getElementById("pageFour");
pageFour.style.display="none";
})

let backHome= document.getElementById("backHome");
backHome.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
})

let btnPeople = document.getElementById("btnPeople");
btnPeople.addEventListener("click",()=>{
const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="";
const pageFour=document.getElementById("pageFour");
pageFour.style.display="none";
})

let btnPeople2 = document.getElementById("btnPeople2");
btnPeople2.addEventListener("click",()=>{
const pageOne=document.getElementById("pageOne");
pageOne.style.display="none";
const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="";
const pageFour=document.getElementById("pageFour");
pageFour.style.display="none";
})

let backHome2 = document.getElementById("backHome2");
backHome2.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
})

let btnMoreInf3 = document.getElementById("btnMoreInf3");
btnMoreInf3.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="none";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
const pageFour=document.getElementById("pageFour");
pageFour.style.display="none";
})

let btnStatistics = document.getElementById("btnStatistics");
btnStatistics.addEventListener("click",()=>{
  const pageFour=document.getElementById("pageFour");
  pageFour.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
const pageOne=document.getElementById("pageOne");
pageOne.style.display="none";
})
let backHome3 = document.getElementById("backHome3");
backHome3.addEventListener("click",()=>{
  const pageFour=document.getElementById("pageFour");
  pageFour.style.display="none";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
const pageOne=document.getElementById("pageOne");
pageOne.style.display="";
})
let btnStatistics2 = document.getElementById("btnStatistics2");
btnStatistics2.addEventListener("click",()=>{
  const pageFour=document.getElementById("pageFour");
  pageFour.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
const pageOne=document.getElementById("pageOne");
pageOne.style.display="none";
})

//nombramos variable a nuestra data general
let filmsData = data.films;

//estructurando nuestra lista recorrida
const totalDataFilms = (listData) =>{
  let resultMovies = "";
//recorriendo nuestro array e ingresando vista html en forma de tarjetas
listData.forEach((filmsData) => {//=> sintaxis: parametro.forEach(parametro que es nuestra funcion) 
  const dataCard = `
  <div class="cardContainer">
  <div class="cardInner">
  <div class="cardFront">
  <img class="poster" src="${filmsData.poster}">
  <div class="filmsTitle"> ${filmsData.title}</div>
  <div class="filmsYear"> Year: ${filmsData.release_date} <span>  ⭐ ${filmsData.rt_score}</span> 
  </div>
  </div>
  <div class="cardBack">
  <div class="cardTextBack">
  <strong> Director: </strong>  ${filmsData.director}
  <br>
  <strong> Description:</strong> ${filmsData.description}
  </div>
  </div>
  </div>
  </div>
  `;
  //nuestra variable vacia la igualamos a la constante ==> += para que recorra cada films y nos aceda a todo los datos de los films
  resultMovies += dataCard ;
    });
    //llamamos nuestra vista creada en html mediante  su id para agregar la informacion obtenida o recorrida
    document.getElementById("filmsInfo").innerHTML= resultMovies;
  }
  //por sintaxis debe retornar la variable con su parametro?
  totalDataFilms(filmsData);

/* console.log(sortMovies(myArray, "title", "A-Z"))
  console.log(sortMovies(myArray, "release_date" , "sortDateAsc"))*/

 //manipulamos funcion sort en DOM
  document.getElementById("selectSortAZ").addEventListener("change", (e) => {
  const selectedIndex = e.currentTarget.value;
  //debugger
  if (selectedIndex == "A-Z") {
    totalDataFilms(sortMovies(filmsData, "title", "A-Z"));
  }if (selectedIndex === "Z-A") {
    totalDataFilms(sortMovies(filmsData, "title", "Z-A"));
  }if (selectedIndex === "sortDateAsc") {
    totalDataFilms(sortMovies(filmsData, "release_date", "sortDateAsc"));
  }if (selectedIndex === "sortDateDes") {
    totalDataFilms(sortMovies(filmsData, "release_date", "sortDateDes"));
  }else{
 return totalDataFilms(filmsData);
  }
});

//traemos la data "gender" del objeto e imprimimos en interfaz
  //concatenamos arrays para acceder a nuestros personajes del objeto
let peopleValue=[];
  for (let element of filmsData) {
 peopleValue.push(element.people);
  }
let listOfPeople = peopleValue[0];
 for (let i=1; i<peopleValue.length; i++){
   listOfPeople = listOfPeople.concat(peopleValue[i]);
 }
 //console.log(listOfPeople); //Este array contiene todos los personajes.
 
 let peopleGender=[];
  for (let element of listOfPeople) {
 peopleGender.push(element.gender);
  }
/*const genderArr= new Set(peopleGender);
 let result = [...genderArr];
 console.log(result);
 /*console.log(filterByGender(filmsData, peopleGender.Female)); */

const totalPeople = (listData) =>{
  let resultPeople = "";
//recorriendo nuestro array
listData.forEach((listOfPeople) => {
  const dataPeopleObj = `
  <div class="cardContainerPeople">
  <div class="cardInner">
  <div class="cardFront">
  <img class="posterPeople" src="${listOfPeople.img}">
  <div class="filmsPeopleName">
  Name: ${listOfPeople.name}
  <br>
  Gender: ${listOfPeople.gender}
  <br>
  Specie:  ${listOfPeople.specie}
  <br>
  Eye color: ${listOfPeople.eye_color}
  </div>
  </div>
  </div>
  </div>
  `;
  resultPeople += dataPeopleObj ;
    });
  document.getElementById("filmsPeopleCard").innerHTML= resultPeople;
  }
  totalPeople(listOfPeople);


//Aplicando evento al FILTER
document.getElementById("selectGender").addEventListener("change", (e) => {
  const selectedFilter = e.currentTarget.value;
  //debugger
  // sortBy.options[sortBy.selectedIndex].value;
  if (selectedFilter == "002") {
   return totalPeople(filterByGender(listOfPeople, "Female"));
  }else if(selectedFilter == "001") {
    return totalPeople(filterByGender(listOfPeople, "Male"));
  } else if(selectedFilter == "003") {
    return totalPeople(filterByGender(listOfPeople, "NA"));
  }else {
      return totalPeople(filterByGender(listOfPeople, "Unknown (Possible Male)"));
   }
  });
 /*
let resultPorcent ="" 
let directorList=[];
for (let element of filmsData) {
directorList.push(element.director);
}

console.log(filterByGender(listOfPeople,"Unknown (Possible Male)"))*/


//Estadísticas
/* let director = filmsData.map((x) => x.director);
director = director.filter((item, i) =>{
  return director.indexOf(item) === i;
}) */

let directorList=[];
for (let element of filmsData) {
directorList.push(element.director);
}

let porcentaje =[];
for (let element of directorList){
  porcentaje.push((computeStats(filmsData, element)));
}


let result = [],
    i, l = Math.min(directorList.length, porcentaje.length);
for (i = 0; i < l; i++) {
    result.push(...directorList, ...porcentaje);
}
// result.push(...directorList.slice(l), ...porcentaje.slice(l));


const directorArr= new Set(result);
 let resultFinal = [...directorArr];

 console.log(resultFinal);

 const directorFinalResult = document.getElementById("filmsStatistics");
 const directorTable =`
 <div>
 <p> Find below the movies statistics by directors: </p>
 <table class="stadisticsTable">
 <tr><th> DIRECTOR </th> <th> PERCENT (%)</th></tr>
 <tr><td >${resultFinal[0]}</td><td >${resultFinal[6]+ "%"} </td></tr>
 <tr><td >${resultFinal[1]}</td><td >${resultFinal[7]+ "%"} </td></tr>
 <tr><td >${resultFinal[4]}</td><td >${resultFinal[9]+ "%"} </td></tr>
 <tr><td >${resultFinal[5]}</td><td >${resultFinal[9]+ "%"} </td></tr>
 <tr><td >${resultFinal[2]}</td><td >${resultFinal[8]+ "%"} </td></tr>
 <tr><td >${resultFinal[3]}</td><td >${resultFinal[8]+ "%"} </td></tr>
  </table>
 </div>
 `;
 directorFinalResult.innerHTML=directorTable;
 
 //const myDirectorChart= document.getElementById("filmsStadistics").getContext("2d");
 
 /* let directorPercent = directorList + porcentaje;
 
 console.log(directorPercent);*/


