function bowlingScore(input) {
    let n = input.length;
    let total_score = 0;
    let frame_count = 1;
    let index = 0
    while (index < n) {

        if (frame_count == 10) {
            if (input[index] == 10) {
                total_score += input[index] + input[index + 1] + input[index + 2]
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

// const score = bowlingScore([10, 1, 5, 1, 2, 10, 5, 2, 10, 10, 8, 1, 10, 3, 2]);
// console.log(score);
module.exports=bowlingScore;