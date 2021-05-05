import * as React from 'react';
import { Checkbox, FormField, Input, Label, RadialGauge } from 'uxp/components';

interface IProps {

}

const RadialGaugeExample: React.FunctionComponent<IProps> = (props) => {

    let [min, setMin] = React.useState(0)
    let [max, setMax] = React.useState(100)
    let [val, setVal] = React.useState(0)
    let [color, setColor] = React.useState("black")
    let [label, setLabel] = React.useState("Radial Gauge")
    let [auto, setAuto] = React.useState(true)
    let [gradient, setGradient] = React.useState(false)
    let [legend, setLegend] = React.useState(true)

    let timer = React.useRef(null)
    React.useEffect(() => {
        if (auto) {
            timer.current = setInterval(() => {
                setVal(_round(getRandomArbitrary(min, max)))
            }, 2000)
        }
        else {
            if (timer.current) {
                clearInterval(timer.current)
            }
        }

    }, [auto])

    function _round(num: number) {
        return Math.round((num + Number.EPSILON) * 100) / 100
    }

    function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    return (<div className="section">
        <h3>Radial Gauge</h3>

        <div className="showcase-section bgWhite" style={{ display: 'flex', flexDirection: 'row' }} >
            <h4>Radial Gauge</h4>

            <div className="example" style={{ width: 400, height: 600, padding: 20 }}>
                <RadialGauge
                    margin={10}
                    value={val}
                    min={min}
                    max={max}
                    label={() => <>{label}</>}
                    tickColor={color}
                    legend={legend}
                    gradient={gradient}
                />
            </div>

            <div className="code" style={{ padding: '20px', width: '50%' }} >
                <h4>Configs</h4>

                <div style={{ display: 'flex', width: '100%' }} >
                    <div>
                        <FormField>
                            <Label>Min</Label>
                            <Input value={min.toString()} onChange={s => setMin(isNaN(parseFloat(s)) ? 0 : parseFloat(s))}
                            />
                        </FormField>
                    </div>
                    <div>
                        <FormField>
                            <Label>Max</Label>
                            <Input value={max.toString()} onChange={s => setMax(isNaN(parseFloat(s)) ? 0 : parseFloat(s))}
                            />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%' }} >
                    <div>
                        <FormField>
                            <Label>Values</Label>
                            <Input value={val.toString()} onChange={s => setVal(isNaN(parseFloat(s)) ? 0 : parseFloat(s))}
                            />
                        </FormField>
                    </div>
                    <div>
                        <FormField>
                            <Label>Label</Label>
                            <Input value={label} onChange={setLabel}
                            />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%' }} >
                    <div>
                        <FormField>
                            <Label>Tick Color</Label>
                            <Input value={color} onChange={setColor}
                            />
                        </FormField>
                    </div>
                    <div>
                        <FormField>
                            <Checkbox checked={legend} onChange={setLegend} label="Show legend" />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%' }} >
                    <div>
                        <FormField>
                            <Checkbox checked={auto} onChange={setAuto} label="Change value automatically after few seconds" />
                        </FormField>
                    </div>
                    <div>
                        <FormField>
                            <Checkbox checked={gradient} onChange={setGradient} label="Convert colors to gradient" />
                        </FormField>
                    </div>
                </div>

            </div>
        </div>

    </div >)
}

export default RadialGaugeExample