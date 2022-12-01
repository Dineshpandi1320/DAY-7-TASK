//Get all the countries from the Asia continent /region using the Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    var res1=result.filter((ele)=>(ele.continents == "Asia"))
    console.log(res1)
}
//output
//(52)


//Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    var res=result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
}

//output
//7777721563

//Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    var res1=result.filter((ele)=>(ele.population<200000))
    var res2=res1.map((ele)=>ele.name.common)
    console.log(res2)
}
//output
//(62)

//Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    var res= result.forEach(element => {console.log(`${element.name.common} ${element.capital} ${element.flag}`)});
}
//output
//auritania Nouakchott 🇲🇷
//  Aruba Oranjestad 🇦🇼
//  Argentina Buenos Aires 🇦🇷
//  Sweden Stockholm 🇸🇪
//  Maldives Malé 🇲🇻
//  Mexico Mexico City 🇲🇽


//Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    var res= result.filter((ele)=>{
        for (let key in ele.currencies)
        {
            if(ele.currencies[key].code=="USD")
            {
                console.log(ele.name)
            }
        }
    })
}

//output
// American Samoa
//  Bonaire, Sint Eustatius and Saba
//  British Indian Ocean Territory
//  Virgin Islands (British)