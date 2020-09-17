import { addDays, endOfMonth } from 'date-fns';
import * as React from 'react';
import { DatePicker, FormField, Label } from 'uxp/components';

const DatePickerExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [date, setDate] = React.useState(new Date())

    return (<div className="section">
        <h3>Date Picker</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Date Picker </h4>
            <div className="example">
                <div className="flex-row">
                    <FormField className="showcase-input">
                        <Label>Date Picker (default) </Label>
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={setDate}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Picker (disabled dates) </Label>
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={setDate}
                            options={{
                                disableDates: [addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 4), addDays(new Date(), 8)]
                            }} />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Picker (disabled weekends) </Label>
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={setDate}
                            options={{
                                disableWeekEnds: true
                            }} />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Picker (min max dates) </Label>
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={setDate}
                            options={{
                                minDate: new Date(),
                                maxDate: addDays(new Date(), 7)
                            }} />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Picker (close on select) </Label>
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={setDate}
                            closeOnSelect
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default DatePickerExample