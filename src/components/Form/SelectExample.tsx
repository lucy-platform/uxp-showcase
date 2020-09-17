import * as React from 'react';
import { FormField, Input, Label, Select } from 'uxp/components';

const SelectExample: React.FunctionComponent<{}> = (props) => {

    //state
    let [selected, setSelected] = React.useState("")

    let options = [
        { label: "Option 01", value: "op-1" },
        { label: "Option 02", value: "op-2" },
        { label: "Option 03", value: "op-3" },
    ]

    return (<div className="section">
        <h3>Select</h3>

        <div className="showcase-section bgWhite">
            <h4>Select </h4>
            <div className="example">

                <div className="flex-row">

                    <FormField className="showcase-input" >
                        <Label>Select box ( default )</Label>
                        <Select
                            selected={selected}
                            options={options}
                            onChange={setSelected}
                            placeholder=" -- select --"
                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>Select box ( valid )</Label>
                        <Select
                            selected={selected}
                            options={options}
                            onChange={setSelected}
                            placeholder=" -- select --"
                            isValid={true}
                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>Select box ( in-valid )</Label>
                        <Select
                            selected={selected}
                            options={options}
                            onChange={setSelected}
                            placeholder=" -- select --"
                            isValid={false}
                        />
                    </FormField>
                </div>
            </div>

            <div className="code">
            </div>
        </div>
    </div>)
}

export default SelectExample