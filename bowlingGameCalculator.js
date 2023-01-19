// first part
function bowlingScore(input) {

    let total_throw = input.length;
    let total_score = 0;
    let frame_count = 1;
    let index = 0;
    // if(total_throw<12){
    //     throw new Error('not possile');
    // }
    // if(total_throw>21){
    //     throw new Error('not possible');
    // }

    while (index < total_throw) {

        if (frame_count == 10) {
            if (input[index] == 10) {
                total_score += input[index] + input[index + 1] + input[index + 2]
                index += 3;
            }
            else if (input[index] + input[index + 1] == 10) {
                total_score += input[index] + input[index + 1] + input[index + 2];
                index += 3;
            }
            else {
                total_score += input[index] + input[index + 1];
                index += 2
            }
        }
        else if (input[index] == 10) {
            total_score += input[index] + input[index + 1] + input[index + 2];
            index++;
            frame_count++;
        }
        else if (input[index] + input[index + 1] == 10) {
            total_score += input[index] + input[index + 1] + input[index + 2];
            index += 2;
            frame_count++;
        }
        else {
            total_score += input[index] + input[index + 1];
            index += 2
            frame_count++;
        }

    }
    return total_score;
}



// 2nd part


const bestScore = (gameSets) => {
    const gameSet = gameSets.reduce((maxScore, game) => {

        if (bowlingScore(maxScore) > bowlingScore(game))
            return maxScore;
        else
            return game;


    })

    return bowlingScore(gameSet);
}

// 
// console.log(bestScore(gameSets));



module.exports = { bowlingScore, bestScore }