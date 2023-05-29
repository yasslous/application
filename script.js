let infos = document.querySelector("section") ;

var capitalDiv = document.createElement('div') ;
var flagDiv = document.createElement('div') ;
var countryDiv = document.createElement('div') ;
var continentDiv = document.createElement('div') ;

function search() {
   let textCountry = document.querySelector('.text').value ;
   countryDiv.innerHTML = `<span>pays</span><br><p>${textCountry}</p>`

   let url = "https://restcountries.com/v3.1/name/" + textCountry ;

   fetch(url)
   .then(response => 
    response.json()
    .then(data => {
        const country = data[0] ;
        const capital = country.capital ;
        const continent = country.continents ;
        const flag = country.flags.svg ;

        capitalDiv.innerHTML = `<span>capital</span><br><p>${capital}</p>` ;
        continentDiv.innerHTML = `<span>continent</span><br><p>${continent}</p>` ;
        flagDiv.innerHTML = `<span>drapeaux</span><br><img src = "${flag} " >` ;

        infos.appendChild(countryDiv) ;
        infos.appendChild(continentDiv) ;
        infos.appendChild(capitalDiv) ;
        infos.appendChild(flagDiv) ;

    }))
    
}