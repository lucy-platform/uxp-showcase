import * as React from 'react';
import { FormField } from 'uxp/components';

const FormFieldExample: React.FunctionComponent<{}> = (props) => {
    return (<div className="section">
        <h3>Form Field</h3>

        <div className="showcase-section ">
            <h4>Form Field </h4>
            <div className="example" style={{backgroundColor: "#f8f8f8", padding: "10px", borderRadius: "10px"}}>
                <FormField inline backgroundColor="white"> This is an in-line form field </FormField>
                <FormField backgroundColor="white"> This is a form field </FormField>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default FormFieldExample