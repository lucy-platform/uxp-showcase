import * as React from 'react';
import { PieChartComponent } from 'uxp/components';

interface IProps {

}

const PieChartExample: React.FunctionComponent<IProps> = (props) => {

    return (<div className="section">
        <h3>Pie Chart</h3>

        <div className="showcase-section inline bgWhite" >
            <h4>Pie Chart</h4>

            <div className="example" style={{ width: 400, height: 400 }}>
                <PieChartComponent
                    data={[
                        { name: 'Group A', value: 400, color: "#0088FE" },
                        { name: 'Group B', value: 300, color: "#00C49F" },
                        { name: 'Group C', value: 300, color: "#FFBB28" },
                        { name: 'Group D', value: 200, color: "#FF8042" }
                    ]}
                    fillColor="#8884d8"
                />
            </div>

            <div className="code">
            </div>
        </div>


    </div >)
}

export default PieChartExample