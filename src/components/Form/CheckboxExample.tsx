import * as React from 'react';
import { Checkbox, FormField, Input, Label } from 'uxp/components';

const CheckboxExample: React.FunctionComponent<{}> = (props) => {

    //state
    let [checkedDef, setCheckedDef] = React.useState(false)
    let [checked, setChecked] = React.useState(true)

    return (<div className="section">
        <h3>Checkbox</h3>

        <div className="showcase-section bgWhite">
            <h4>Checkbox (Default) </h4>
            <div className="example">

                <div className="flex-row">

                    {/* default */}
                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={0}>
                        <Label>Checkbox ( default - un-checked )</Label>
                        <Checkbox
                            onChange={setCheckedDef}
                            checked={checkedDef}
                            label='Sample Checkbox'
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={1}>
                        <Label>Checkbox ( default - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={2}>
                        <Label>Checkbox ( valid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={3}>
                        <Label>Checkbox ( invalid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid={false}
                        />
                    </FormField>


                </div>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite">
            <h4>Checkbox (Bordered) </h4>
            <div className="example">

                <div className="flex-row">

                    {/* default */}
                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={0}>
                        <Label>Checkbox ( default - un-checked )</Label>
                        <Checkbox
                            onChange={setCheckedDef}
                            checked={checkedDef}
                            label='Sample Checkbox'
                            type="bordered"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={1}>
                        <Label>Checkbox ( default - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            type="bordered"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={2}>
                        <Label>Checkbox ( valid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid
                            type="bordered"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={3}>
                        <Label>Checkbox ( invalid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid={false}
                            type="bordered"
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite">
            <h4>Checkbox (Different Icons) </h4>
            <div className="example">

                <div className="flex-row">

                    {/* default */}
                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={0}>
                        <Label>Checkbox ( default - un-checked )</Label>
                        <Checkbox
                            onChange={setCheckedDef}
                            checked={checkedDef}
                            label='Sample Checkbox'
                            type="change-icon"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={1}>
                        <Label>Checkbox ( default - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            type="change-icon"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={2}>
                        <Label>Checkbox ( valid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid
                            type="change-icon"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={3}>
                        <Label>Checkbox ( invalid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid={false}
                            type="change-icon"
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite">
            <h4>Checkbox (Toggle Switch Line) </h4>
            <div className="example">

                <div className="flex-row">

                    {/* default */}
                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={0}>
                        <Label>Checkbox ( default - un-checked )</Label>
                        <Checkbox
                            onChange={setCheckedDef}
                            checked={checkedDef}
                            label='Sample Checkbox'
                            type="switch-line"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={1}>
                        <Label>Checkbox ( default - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            type="switch-line"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={2}>
                        <Label>Checkbox ( valid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid
                            type="switch-line"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={3}>
                        <Label>Checkbox ( invalid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid={false}
                            type="switch-line"
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite">
            <h4>Checkbox (Toggle Sitch Box) </h4>
            <div className="example">

                <div className="flex-row">

                    {/* default */}
                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={0}>
                        <Label>Checkbox ( default - un-checked )</Label>
                        <Checkbox
                            onChange={setCheckedDef}
                            checked={checkedDef}
                            label='Sample Checkbox'
                            type="switch-box"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={1}>
                        <Label>Checkbox ( default - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            type="switch-box"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={2}>
                        <Label>Checkbox ( valid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid
                            type="switch-box"
                        />
                    </FormField>

                    <FormField inline className="showcase-checkbox" backgroundColor="white" key={3}>
                        <Label>Checkbox ( invalid - checked )</Label>
                        <Checkbox
                            onChange={setChecked}
                            checked={checked}
                            label='Sample Checkbox'
                            isValid={false}
                            type="switch-box"
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default CheckboxExample