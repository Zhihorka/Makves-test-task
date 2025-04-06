import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {addZScore} from "../../lib/addZScore";
import {ChartDataItem} from "../../models/chartDataItem";
import {CustomizedDot} from "./ui/customizedDot/CustomizedDot";
import {calculateGradient} from "./lib/calculateGradient";

import "./style.css"

interface Props{
    data: ChartDataItem[],
    zScoreDataKey: string,
    label?: string
}

export const ZScoreChart: React.FC<Props> = ({data, zScoreDataKey, label}) =>{

    const enchandecData = addZScore(data, zScoreDataKey);
    const zScores = enchandecData.map((element)=> element.zScore).filter(Boolean);


    const { topPart, bottomPart } = calculateGradient(zScores as number[])

    return (
        <div className="wrapper">
            {label && <h3>{label}</h3>}
            <LineChart
                width={500}
                height={300}
                data={enchandecData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={`${0}%`} stopColor="red"/>
                        <stop offset={`${topPart}%`} stopColor="black"/>
                        <stop offset={`${bottomPart}%`} stopColor="black"/>
                        <stop offset={`${100}%`} stopColor="red"/>
                    </linearGradient>
                </defs>
                <Line type="monotone" dataKey="zScore" stroke="url(#colorPv)" activeDot={{r: 8}}  strokeWidth={2}
                      dot={<CustomizedDot />}
                />
            </LineChart>
        </div>
    )
}