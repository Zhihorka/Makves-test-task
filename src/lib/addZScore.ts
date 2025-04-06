import {ChartDataItem} from "../models/chartDataItem";

export const addZScore = (chartData: ChartDataItem[], key: string) => {
    const enchandedArray = structuredClone(chartData);

    const numbersArray: number[] = chartData.map((element)=> element[key as keyof ChartDataItem] as number);

    const arrMean = numbersArray.reduce((a: number, b: number) => a + b) / numbersArray.length
    const arrSquaredDeviation =  numbersArray.map((element: number)=>  Math.pow(element-arrMean,2))
    const arrDeviation =  arrSquaredDeviation.reduce((a: number, b: number) => a + b) / (numbersArray.length-1);
    const standardDeviation = Math.sqrt(arrDeviation);


    const zScores = numbersArray.map((element: number)=> {
        return (element - arrMean) / standardDeviation;
    })

    for (let i = 0; i < enchandedArray.length; i++){
        enchandedArray[i] = {...enchandedArray[i], zScore: zScores[i], zScoreAbs: Math.abs(zScores[i])}
    }

    return enchandedArray;
}




