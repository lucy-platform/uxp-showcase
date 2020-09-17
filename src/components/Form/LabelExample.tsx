import * as React from 'react';
import { Label } from 'uxp/components';

const LabelExample: React.FunctionComponent<{}> = (props) => {
    return (<div className="section">
        <h3>Label</h3>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Label </h4>
            <div className="example">
                <Label>Form Label</Label>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default LabelExample