import * as React from 'react';
import { DynamicSelect, FormField, Label } from 'uxp/components';

const DynamicSelectExample: React.FunctionComponent<{}> = (props) => {

    //state
    let [selected, setSelected] = React.useState<any>(null);

    let DynamicOptions = [
        { label: "Sri Lanka", value: "Sri Lanka" },
        { label: "India", value: "India" },
        { label: "Canada", value: "Canada" },
        { label: "China", value: "China" },
        { label: "Japan", value: "Japan" },
        { label: "Singapore", value: "Singapore" },
        { label: "Australia", value: "Australia" },
        { label: "Pakistan", value: "Pakistan" },
        { label: "Russia", value: "Russia" },
        { label: "America", value: "America" },
        { label: "England", value: "England" },
        { label: "New Zealand", value: "New Zealand" },
        { label: "Afghanistan", value: "Afghanistan" },
    ]

    const getOptions = (max: number, pageToken: string, args?: any) => {
        let last = 0

        if (pageToken !== null) last = parseInt(pageToken);

        let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
            let data = [];

            if (args && args.query && args.query.trim().length > 0) {
                let regEx = new RegExp(args.query)
                data = DynamicOptions.filter((opt: any) => regEx.test(opt.label.toLowerCase()))
                data = data.slice(last, last + max)
            }
            else {
                data = DynamicOptions.filter((item: any, key: number) => (key >= last && key < last + max));
            }
            let response = { items: data, pageToken: (last + data.length).toString() }
            resolve(response);
        })

        return p;
    }


    return (<div className="section">
        <h3>Dynamic Select</h3>

        <div className="showcase-section bgWhite">
            <h4>Dynamic Select </h4>
            <div className="example">

                <div className="flex-row">

                    <FormField className="showcase-input" >
                        <Label>select box ( default )</Label>
                        <DynamicSelect
                            selected={selected?.label}
                            options={getOptions}
                            onChange={setSelected}
                            placeholder=" -- select --"
                            labelField="label"
                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>select box (type : search-box)</Label>
                        <DynamicSelect
                            selected={selected?.label}
                            options={getOptions}
                            onChange={(value) => { setSelected(value); console.log(value) }}
                            placeholder=" -- select --"
                            labelField="label"
                            type='search-box'
                        />
                    </FormField>
                </div>
            </div>

            <div className="code">
            </div>
        </div>
    </div>)
}

export default DynamicSelectExample