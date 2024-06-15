class Caw{
    constructor(Name, color, weight, cowNumber){
        this.Name = Name;
        this.color = color;
        this.weight = weight;
        this.cowNumber = cowNumber;

    }
}



const result = new Caw('LalGoru', 'Lal', 20, 1);



console.log(result.weight);

if(result.weight > 50){
    console.log('Kurbani Upojukto');
}else{
    console.log('Kurbani Onupojukto');
}
