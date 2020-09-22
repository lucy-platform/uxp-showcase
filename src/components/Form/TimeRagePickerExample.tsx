import * as React from 'react';
import { FormField, Label, TimeRangePicker } from 'uxp/components';

const TimeRagePickerExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [stDate, setStDate] = React.useState(new Date())
    let [endDate, setEndDate] = React.useState(new Date())

    return (<div className="section">
        <h3>Time Range Picker</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Time Range Picker </h4>
            <div className="example">
                <div className="flex-row">

                    <FormField inline>
                        <Label>Time Range Picker</Label>

                        <TimeRangePicker
                            startTime={stDate}
                            endTime={endDate}
                            onChange={(start, end) => {
                                setStDate(start); setEndDate(end)
                            }}
                            title="Time Range"
                        />

                    </FormField>



                </div>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default TimeRagePickerExample