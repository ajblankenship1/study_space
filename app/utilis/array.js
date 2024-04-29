

export function arrayShuffle(ourArray){
    let shuffledArray=[];
    shuffledArray.push(ourArray[0]);
    ourArray.splice(0,1);
    while(ourArray.length > 0){
        let randomIndex = Math.floor(Math.random()* ourArray.length);
        shuffledArray.push(ourArray[randomIndex]);
        ourArray.splice(randomIndex,1);
    }

    return shuffledArray;
}