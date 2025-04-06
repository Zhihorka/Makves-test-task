export const calculateGradient = (zScores: number[]) =>{
    const valueRange = Math.max(...zScores) + Math.abs( Math.min(...zScores))
    const valueFromTop =  Math.max(...zScores) - 1;
    const topPart =  ((valueFromTop/valueRange)*100).toFixed(2);

    const valueFromBottom =  Math.abs(Math.min(...zScores)) - 1;
    const bottomPart = (((valueRange - valueFromBottom)/valueRange)*100).toFixed(2);


    return {topPart, bottomPart}
}