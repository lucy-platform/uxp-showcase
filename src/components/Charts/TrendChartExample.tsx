import * as React from 'react';
import { TrendChartComponent } from 'uxp/components';

interface IProps {

}

type ITrendSeriesType = 'line' | 'area';
interface ITrendData {
    time: Date | string,
    value: number
}
interface ITrendSeries {
    type: ITrendSeriesType
    unit: string,
    lineColor: string,
    fillColor?: string,
    data: ITrendData[]
}

const TrendChartExample: React.FunctionComponent<IProps> = (props) => {

    const TrendData: ITrendSeries[] = [
        {
            unit: "A",
            lineColor: "#ff7300",
            data: [
                { time: "2020/07/20", value: 200 },
                { time: "2020/08/20", value: 100 },
                { time: "2020/09/20", value: 50 },
                { time: "2020/10/20", value: 300 },
                { time: "2020/11/20", value: 700 },
                { time: "2020/12/20", value: 90 }
            ],
            type: "line"
        },
        {
            unit: "B",
            lineColor: "#413ea0",
            fillColor: "#8884d8",
            data: [
                { time: "2014/06/21", value: 50 },
                { time: "2020/07/20", value: 50 },
                { time: "2020/08/20", value: 30 },
                { time: "2020/09/20", value: 90 },
                { time: "2020/10/20", value: 300 },
                { time: "2020/11/20", value: 100 },
                { time: "2020/12/20", value: 90 }
            ],
            type: "area"
        }
    ]

    return (<div className="section">
        <h3>Trend Chart</h3>

        <div className="showcase-section bgWhite" style={{width: "50%"}} >
            <h4>Trend Chart</h4>

            <div className="example" style={{ width: "100%", height: 400 }}>
                <TrendChartComponent
                    data={TrendData}
                />
            </div>

            <div className="code">
            </div>
        </div>


    </div >)
}

export default TrendChartExample