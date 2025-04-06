export interface ChartDataItem {
    name: string,
    uv: number,
    pv: number,
    amt: number,
    zScore?: number;
    zScoreAbs?: number
}