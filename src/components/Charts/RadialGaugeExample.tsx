import * as React from 'react';
import { RadialGauge } from 'uxp/components';

interface IProps {

}

const RadialGaugeExample: React.FunctionComponent<IProps> = (props) => {

    let [min, setMin] = React.useState(0)
    let [max, setMax] = React.useState(100)
    let [val, setVal] = React.useState(0)

    React.useEffect(() => {
        setInterval(() => {
            setVal(getRandomArbitrary(min, max))
        }, 2000)
    }, [])

    function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    return (<div className="section">
        <h3>Radial Gauge</h3>

        <div className="showcase-section inline bgWhite" >
            <h4>Radial Gauge</h4>

            <div className="example" style={{ width: 400, height: 600 }}>
                <RadialGauge
                    margin={10}
                    value={val}
                    min={min}
                    max={max}
                    label={() => <>Radial Gauge</>}
                    legend={true}
                    markersColor={"white"}
                    colors={[
                        { color: 'blue', stopAt: 25 },
                        { color: 'green', stopAt: 50 },
                        { color: 'yellow', stopAt: 70 },
                        { color: 'red', stopAt: 100 }
                    ]}
                />
            </div>

            <div className="code">
            </div>
        </div>


    </div >)
}

export default RadialGaugeExample