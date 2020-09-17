import * as React from 'react';
import { FilterPanel, FormField, Input, Label, Select } from 'uxp/components';

const FilterPanelExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [inputValue, setInputValue] = React.useState<string>("")
    let [selected, setSelected] = React.useState<string>("")

    return (<div className="section">
        <h3>FilterPanel</h3>

        <div className="showcase-section inline bgWhite" >
            <h4>FilterPanel</h4>

            <div className="example" style={{ width: "250px", height: "auto", display: "flex", justifyContent: "flex-end" }}>
                <FilterPanel
                    enableClear={inputValue?.length > 0 || selected?.length > 0}
                    onClear={() => { setInputValue(""); setSelected(null) }} >
                    <FormField className="no-padding mb-only">
                        <Label>Sort By</Label>
                        <Select
                            selected={selected}
                            options={[
                                { label: "Name", value: "op-1" },
                                { label: "Date", value: "op-2" },
                            ]}
                            onChange={(value) => { setSelected(value) }}
                            placeholder=" -- select --"
                            isValid={selected ? selected?.length > 0 : null}
                        />
                    </FormField>
                    <FormField className="no-padding mb-only">
                        <Label>Name</Label>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={(value) => { setInputValue(value) }}
                            isValid={inputValue ? inputValue.trim().length > 0 : null}
                            hasIndicator
                            placeholder="placeholder"
                        />
                    </FormField>
                </FilterPanel>
            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default FilterPanelExample