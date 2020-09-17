import * as React from 'react';
import { FormFeedback } from 'uxp/components';

const FormFeedbackExample: React.FunctionComponent<{}> = (props) => {
    return (<div className="section">
        <h3>Form Feedback</h3>

        <div className="showcase-section ">
            <h4>Form Feedback (valid) </h4>
            <div className="example">
                <FormFeedback validInput>Form feedback ( valid )</FormFeedback>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section ">
            <h4>Form Feedback (in-valid) </h4>
            <div className="example">
                <FormFeedback validInput={false}>Form feedback ( invalid )</FormFeedback>
            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default FormFeedbackExample