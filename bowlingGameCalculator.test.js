const bowlingScore = require('./bowlingGameCalculator')

describe('Calculates the score in the bowling game', () => {

    it('should give 30 score when scored set1', () => {
        const set1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]

        expect(bowlingScore(set1)).toBe(30)
    })
    
    it('should give 90 when scored set2', () => {
        const set2 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
        expect(bowlingScore(set2)).toBe(90)
    })

    it('should give 16 when scored set3', () => {
        const set2 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(bowlingScore(set2)).toBe(16)
    })
    // it('should give error when scored set4', () => {
    //     const set4 = [0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]

    //     expect(()=> {bowlingScore(set4)}).toThrow('not possible')
    // })
    // it('should give error when scored set5', () => {
    //     const set5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]

    //     expect(()=>{bowlingScore(set5)}).toThrow('not possible')
    // })



})