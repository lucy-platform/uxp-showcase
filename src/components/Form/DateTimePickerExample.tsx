import * as React from 'react';
import { DateTimePicker, FormField, Label } from 'uxp/components';

const DateTimePickerExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [date, setDate] = React.useState(new Date())

    return (<div className="section">
        <h3>Date Time Picker</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Date Time Picker </h4>
            <div className="example">
                <div className="flex-row">

                    <FormField inline>
                        <Label>Date Time Picker</Label>
                        <DateTimePicker
                            datetime={date}
                            onChange={setDate}
                            title="Arriving Date Time"
                        />
                    </FormField>



                </div>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default DateTimePickerExample