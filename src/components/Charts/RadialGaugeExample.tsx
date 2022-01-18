import * as React from 'react';
import InputRange from 'react-input-range';
import { Checkbox, FormField, Input, Label, RadialGauge } from 'uxp/components';
import 'react-input-range/lib/css/index.css'
interface IProps {

}

const RadialGaugeExample: React.FunctionComponent<IProps> = (props) => {

    let [min, setMin] = React.useState(0)
    let [max, setMax] = React.useState(100)
    let [val, setVal] = React.useState(0)
    let [thickness, setThickness] = React.useState(20)
    let [largeTick, setLargeTick] = React.useState(4)
    let [smallTick, setSmallTick] = React.useState(1)
    let [color, setColor] = React.useState("black")
    let [label, setLabel] = React.useState("Radial Gauge")
    let [auto, setAuto] = React.useState(true)
    let [gradient, setGradient] = React.useState(false)
    let [legend, setLegend] = React.useState(true)

    let [col1, setCol1] = React.useState("cyan")
    let [col1Stop, setCol1Stop] = React.useState(0.25 * (max - min) + min)
    let [col2, setCol2] = React.useState("green")
    let [col2Stop, setCol2Stop] = React.useState(0.5 * (max - min) + min)
    let [col3, setCol3] = React.useState("yellow")
    let [col3Stop, setCol3Stop] = React.useState(0.75 * (max - min) + min)
    let [col4, setCol4] = React.useState("red")
    let [col4Stop, setCol4Stop] = React.useState(max)

    let [colors, setColors] = React.useState([
        { color: col1, stopAt: col1Stop },
        { color: col2, stopAt: col2Stop },
        { color: col3, stopAt: col3Stop },
        { color: col4, stopAt: col4Stop }
    ])

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

    React.useEffect(() => {
        setCol1Stop(0.25 * (max - min) + min)
        setCol2Stop(0.5 * (max - min) + min)
        setCol3Stop(0.75 * (max - min) + min)
        setCol4Stop(max)

        if (min > max) {
            let _max = min
            let _min = max
            setMin(_min)
            setMax(_max)
        }
        else if(min == max) {
            setMax(prev => (prev + 1))
        }
    }, [min, max])

    React.useEffect(() => {
        let _colors = [
            { color: col1, stopAt: col1Stop },
            { color: col2, stopAt: col2Stop },
            { color: col3, stopAt: col3Stop },
            { color: col4, stopAt: col4Stop }
        ]

        setColors(_colors)

    }, [col1, col1Stop, col2, col2Stop, col3, col3Stop, col4, col4Stop])

    function _round(num: number) {
        return Math.round((num + Number.EPSILON) * 100) / 100
    }

    function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    return (<div className="section" style={{ height: '80vh' }}>
        <h3>Radial Gauge</h3>

        <div className="showcase-section bgWhite" style={{ display: 'flex', flexDirection: 'row', height: '100%' }} >
            <h4>Radial Gauge</h4>

            <div className="example" style={{ width: 400, height: 600, padding: 20, flexGrow: 0, flexShrink: 0 }}>
                <RadialGauge
                    // margin={10}
                    value={val}
                    min={min}
                    max={max}
                    label={() => <>{label}</>}
                    tickColor={color}
                    legend={legend}
                    gradient={gradient}
                    thickness={thickness}
                    largeTick={largeTick}
                    smallTick={smallTick}
                    colors={colors}
                />
            </div>

            <div className="code" style={{ padding: '40px', width: '100%', height: '100%', overflow: "auto" }} >
                <h4>Configs</h4>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >
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
                    <div>
                        <FormField>
                            <Label>Label</Label>
                            <Input value={label} onChange={setLabel}
                            />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >
                    <div>
                        <FormField>
                            <Checkbox checked={auto} onChange={setAuto} label="Change value automatically after few seconds" />
                        </FormField>
                    </div>

                    <div style={{ width: '50%' }}>
                        <FormField>
                            <Label>Value</Label>
                            <InputRange
                                minValue={min}
                                maxValue={max}
                                value={val}
                                onChange={(s: number) => setVal(s)}

                            />
                        </FormField>
                    </div>

                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >

                    <div>
                        <FormField>
                            <Label>Thickness</Label>

                            <Input value={thickness.toString()} onChange={s => setThickness(isNaN(parseFloat(s)) ? 0 : parseFloat(s))}
                            />
                        </FormField>
                    </div>

                    <div style={{ width: '33%' }}>
                        <FormField>
                            <Label>largeTick</Label>
                            <InputRange
                                minValue={1}
                                maxValue={6}
                                value={largeTick}
                                onChange={(s: number) => setLargeTick(s)}

                            />

                        </FormField>
                    </div>

                    <div style={{ width: '33%' }}>
                        <FormField>
                            <Label>smallTick</Label>
                            <InputRange
                                minValue={1}
                                maxValue={3}
                                value={smallTick}
                                onChange={(s: number) => setSmallTick(s)}

                            />
                        </FormField>
                    </div>

                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >
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

                    <div>
                        <FormField>
                            <Checkbox checked={gradient} onChange={setGradient} label="Convert colors to gradient" />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >

                    <div>
                        <FormField>
                            <Label>Color 1</Label>
                            <Input value={col1} onChange={setCol1} />
                        </FormField>
                    </div>

                    <div style={{ width: '50%' }}>
                        <FormField>
                            <Label>Color 1 Stop At</Label>
                            <InputRange
                                minValue={min}
                                maxValue={max}
                                value={col1Stop}
                                onChange={(s: number) => setCol1Stop(s > col2Stop ? col2Stop : s)}

                            />
                        </FormField>
                    </div>
                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >

                    <div>
                        <FormField>
                            <Label>Color 2</Label>
                            <Input value={col2} onChange={setCol2} />
                        </FormField>
                    </div>

                    <div style={{ width: '50%' }}>
                        <FormField>
                            <Label>Color 2 Stop At</Label>
                            <InputRange
                                minValue={min}
                                maxValue={max}
                                value={col2Stop}
                                onChange={(s: number) => setCol2Stop(s > col3Stop ? col3Stop : s)}

                            />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >

                    <div>
                        <FormField>
                            <Label>Color 3</Label>
                            <Input value={col3} onChange={setCol3} />
                        </FormField>
                    </div>

                    <div style={{ width: '50%' }}>
                        <FormField>
                            <Label>Color 3 Stop At</Label>
                            <InputRange
                                minValue={min}
                                maxValue={max}
                                value={col3Stop}
                                onChange={(s: number) => setCol3Stop(s > col4Stop ? col4Stop : s)}

                            />
                        </FormField>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} >

                    <div>
                        <FormField>
                            <Label>Color 4</Label>
                            <Input value={col4} onChange={setCol4} />
                        </FormField>
                    </div>

                    <div style={{ width: '50%' }}>
                        <FormField>
                            <Label>Color 4 Stop At</Label>
                            <InputRange
                                minValue={min}
                                maxValue={max}
                                value={col4Stop}
                                onChange={(s: number) => {
                                    //setCol4Stop(s > col2Stop ? col2Stop : s)
                                }}

                            />
                        </FormField>
                    </div>
                </div>




            </div>
        </div>

    </div >)
}

export default RadialGaugeExample