import * as React from 'react';
import { FormField, Label, TimePicker } from 'uxp/components';

const TimePickerExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [date, setDate] = React.useState(new Date())

    return (<div className="section">
        <h3>Time Picker</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Time Picker </h4>
            <div className="example">
                <div className="flex-row">

                    <FormField inline>
                        <Label>Time Picker</Label>
                        <TimePicker
                            title="Arrival Time"
                            time={date}
                            onChange={setDate}
                        />
                    </FormField>



                </div>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default TimePickerExample