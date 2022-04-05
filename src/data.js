export const sortMovies = (dataFilms, sortBy, sortOrder) => {
  let orderSelectF = [];
        /* lo siguiente ordena según el titulo, dividiendose en ascendente y descendente */
        if (sortBy === "title") {
          // ordena de forma ascendente
          if (sortOrder === "A-Z"){
                orderSelectF= dataFilms.sort(function(x, y) {
                  //==> cuando mi xTitle sea mayor que mi Ytitle le correre un espacio
                if (x.title > y.title) return 1;
                //==> cuando mi xTitle igual que mi Ytitle no hare nada
                if (y.title === x.title) return 0;
                return -1; //==> cuando mi xTitle igual que mi Ytitle no hare nada  correre un espacio hacia atras
              });
          } else {
            orderSelectF = dataFilms.sort(function(x, y) { // ordena de forma descendente
              if (y.title > x.title) return 1;
              if (y.title === x.title) return 0;
              return -1;
            });
          }
        } else if (sortBy === "release_date") {
          // ordena de forma ascendente fechas lanzamiento
        if (sortOrder === "sortDateAsc") {
          orderSelectF = dataFilms.sort(function(x, y) {
            if (x.release_date > y.release_date) return 1;
        if (x.release_date === y.release_date) return 0;
        return -1;
      });
    }  else {
      orderSelectF = dataFilms.sort(function(x , y) {
            if (y.release_date > x.release_date) return 1;
        if (y.release_date === x.release_date) return 0;
        return -1;
      })
    }
    }
return orderSelectF;
}


export const filterByGender = function(dataPeople, genderData){
const filterData= dataPeople.filter(element => element.gender === genderData);
return filterData;
};

export const  computeStats = (dataFilms, nameDirector) =>{
  //constante que guarde funcion de filtro de directores
  const moviesByDirector = (dataFilms.filter(y => y.director === nameDirector));
  // constante guarda el numero de directores
  const count = moviesByDirector.length;
  //constante que realiza la operacion matemtica,regla de tres
    const percent = Math.round((count / dataFilms.length)*100);
  return percent;
};


