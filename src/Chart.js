import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props){
    const dataPointsValues = props.chartDataPoints.map((dataPoint) => dataPoint.value);
    const totalMax = Math.max(...dataPointsValues);

    return(
        <div className = 'chart'>
            {props.chartDataPoints.map((dataPoint) => (
                <ChartBar key={dataPoint.lable} lable={dataPoint.lable} value={dataPoint.value} totalMax={totalMax}></ChartBar>
            ))}

        </div>
    )
}