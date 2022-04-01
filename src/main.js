import {sortMovies , filterByGender, computeStats} from "./data.js";
import data from "./data/ghibli/ghibli.js";
console.log (computeStats);


//console.log (sortMovies)

let bttnMoreInf = document.getElementById("bttnMoreInf");
bttnMoreInf.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="none";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";

})
let backIntro = document.getElementById("backIntro");
backIntro.addEventListener("click",()=>{
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
})
let backIntro2 = document.getElementById("backIntro2");
backIntro2.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
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
let backIntro3 = document.getElementById("backIntro3");
backIntro3.addEventListener("click",()=>{
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



let filmsData = data.films;

//nombrando nuestra lista recorrida
const totalDataFilms = (listData) =>{
  let resultMovies = "";
//recorriendo nuestro array
listData.forEach((filmsData) => {
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
  resultMovies += dataCard ;
    });
    document.getElementById("filmsInfo").innerHTML= resultMovies;
  }
  totalDataFilms(filmsData);
 /* console.log(sortMovies(myArray, "title", "A-Z"))
  console.log(sortMovies(myArray, "release_date" , "sortDateAsc"))*/
 document.getElementById("selectSortAZ").addEventListener("change", (e) => {
  const selectedIndex = e.currentTarget.value;
  //debugger
  // sortBy.options[sortBy.selectedIndex].value;
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
//aca el intento de gabriela xD
let directorList=[];
for (let element of filmsData) {
directorList.push(element.director);
}

// const myDirectorChart= document.getElementById("filmsStadistics").getContext("2d");
let porcentaje =[];
for (let element of directorList){
  porcentaje.push((computeStats(filmsData, element)));
}


let directorPercent = `${directorList} ${porcentaje} `;


console.log(directorPercent)


//const myDirectorChart= document.getElementById("filmsStadistics").getContext("2d");

/* let directorPercent = directorList + porcentaje;

console.log(directorPercent);*/ 



var result = [],
    i, l = Math.min(directorList.length, porcentaje.length);
    
for (i = 0; i < l; i++) {
    result.push(...directorList, ...porcentaje);
}
// result.push(...directorList.slice(l), ...porcentaje.slice(l));


const directorArr= new Set(result);
 let resultFinal = [...directorArr];

 console.log(resultFinal);

 /* function getPercent(a){
  new Chart (a, {
            type:'pie',
            data: {
                labels: director,
                datasets: [{
                  data: porcentaje,
                  backgroundColor: [
                  'rgb(255, 171, 193, 0.9)',
                  'rgb(156, 170, 242, 0.9)',
                  'rgb(255, 202, 203, 0.9)',
                  'rgb(149, 203, 255, 0.9)',
                  'rgb(255, 244, 209, 0.9)',
                  'rgb(180, 229, 255, 0.9)'
                    ],
                },
              ]},
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    position: 'bottom',
                    display: true,
                    text: `Isao Takahata: 25%
                    Hayao Miyazaki: 45%
                    Gorō Miyazaki:10%
                    Hiromasa Yonebayashi:10%
                    Hiroyuki Morita: 5%
                    Yoshifumi Kondō: 5%`
                  }
                }
              },
        })
      }
    getPercent(mySecondChart); */
