function battlesOfCoke(bottles){
    var bottlesCount = bottles;
   for(var i = bottlesCount; i>= 0; i--){
  
    if(i == 1){
        console.log(`${bottlesCount} bottles of coke on the wall, ${bottlesCount} of coke.`)
        bottlesCount -= 1;
        console.log(`Take one down, pass it around, no more bottles of coke on the wall.`)
    }else if(i == 0 ){
        console.log(`No more bottles of coke on the wall, no more bottles of coke.`)
        bottlesCount -= 1;
        console.log(`Go to the store and buy some more, ${bottles} bottles of coke on the wall.`)
    }else{
        console.log(`${bottlesCount} bottles of coke on the wall, ${bottlesCount} of coke.`)
        bottlesCount -= 1;
        console.log(`Take one down, pass it around, ${bottlesCount} bottles of coke on the wall...`)
    }
    }
}


var bottles_of_coke = prompt("Bottles Of Coke! :");


battlesOfCoke(bottles_of_coke)


