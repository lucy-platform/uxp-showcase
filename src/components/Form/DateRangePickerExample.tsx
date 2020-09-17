import { addDays, endOfMonth } from 'date-fns';
import * as React from 'react';
import { DatePicker, DateRangePicker, FormField, Label } from 'uxp/components';

const DateRangePickerExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [startDate, setStartDate] = React.useState(new Date())
    let [endDate, setEndDate] = React.useState(new Date())

    return (<div className="section">
        <h3>Date Range Picker</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Date Range Picker </h4>
            <div className="example">
                <div className="flex-row">
                    <FormField className="showcase-input">
                        <Label>Date Range Picker (default) </Label>
                        <DateRangePicker
                            title="Date Range"
                            startDate={startDate}
                            endDate={endDate}
                            closeOnSelect
                            onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Range Picker (disabled dates) </Label>
                        <DateRangePicker
                            title="Date Range"
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                            options={{
                                disableDates: [addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 4), addDays(new Date(), 8)]
                            }}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Range Picker (disabled weekends) </Label>
                        <DateRangePicker
                            title="Date Range"
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                            options={{
                                disableWeekEnds: true,
                            }}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Range Picker (min, max Dates) </Label>
                        <DateRangePicker
                            title="Date Range"
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                            options={{
                                minDate: new Date(),
                                maxDate: addDays(new Date(), 7)
                            }}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Date Range Picker (close on select) </Label>
                        <DateRangePicker
                            title="Date Range"
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
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

export default DateRangePickerExample