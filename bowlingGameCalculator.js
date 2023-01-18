function bowlingScore(input){
    let n=input.length;
    let sum=0;
    let k=0;
    let count=1;
    let i=0
    while(i<n){
    
        if(count==10){
            if(input[i]==10){
            sum+=input[i]+input[i+1]+input[i+2]
            i+=3;
        }
            else{
            sum+=input[i]+input[i+1];
            i+=2
        }
        }
        else if(input[i]==10){
            sum+=input[i]+input[i+1]+input[i+2];
            i++;
            count++;
        }
        else if(input[i]+input[i+1]==10){
            sum+=input[i]+input[i+1]+input[i+2];
            i+=2;
            count++;
        }
        else{
            sum+=input[i]+input[i+1];
            i+=2
            count++;
        }
       
    }
    return sum;
}

// const score=bowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
// console.log(score);
module.exports=bowlingScore;