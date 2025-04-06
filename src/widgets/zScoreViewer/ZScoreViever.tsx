import {ZScoreChart} from "../../features/zScoreChart/ZScoreChart";
import {defaultData} from "./lib/defaultData";
import {RegularChart} from "../../features/regularChart/RegularChart";


export const ZScoreViever = () =>{
    return (
        <>
            <ZScoreChart data={defaultData} zScoreDataKey="pv" label="Данные zScore для pv"/>
            <ZScoreChart data={defaultData} zScoreDataKey="uv" label="Данные zScore для uv"/>
            <RegularChart data={defaultData} />
        </>
    )
}