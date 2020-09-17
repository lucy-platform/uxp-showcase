import * as React from 'react';
import { ToggleFilter } from 'uxp/components';

const ToggleFilterExample: React.FunctionComponent<{}> = (props) => {

    let [selected, setSelected] = React.useState("month")

    return (<div className="section">
        <h3>Toggle Filter</h3>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Toggle Filter </h4>
            <div className="example">
                <ToggleFilter
                    options={[
                        { label: "Month", value: "month" },
                        { label: "Week", value: "week" },
                        { label: "Day", value: "day" },
                    ]}
                    value={selected}
                    onChange={setSelected}
                />
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default ToggleFilterExample