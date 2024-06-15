const kobita = "Ai selera ai meyara fUl tolite jai , fuler mala golai diya mamar bari jai";

function hoiseKiHoinai(x,y){
    if(x == y){
        console.log("Hoise");
    }else{
        console.log("Hoi nai");
    }
    return hoiseKiHoinai;
}

const kobitaSearch = kobita.toLowerCase();
const searchDeya  = "fuL";
const mySearch = searchDeya.toLowerCase();

const finalSearch = kobitaSearch.includes(mySearch);
 
// ver x = 10;
// ver y = 10;



console.log(finalSearch);

hoiseKiHoinai(10, 5);