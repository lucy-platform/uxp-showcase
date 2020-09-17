import * as React from 'react';
import { FormField, Input, Label } from 'uxp/components';

const InputExample: React.FunctionComponent<{}> = (props) => {

    //state
    let [textDef, setTextDef] = React.useState("")
    let [text, setText] = React.useState("sample input")
    let [pass, setPass] = React.useState("sample")
    let [email, setEmail] = React.useState("sample@abc.com")
    let [num, setNum] = React.useState("1234")

    return (<div className="section">
        <h3>Input</h3>

        <div className="showcase-section bgWhite">
            <h4>Input States </h4>
            <div className="example">

                <div className="flex-row">

                    <FormField className="showcase-input" >
                        <Label>Input (placeholder & indicator)</Label>
                        <Input
                            value={textDef}
                            onChange={setTextDef}
                            hasIndicator={true}
                            placeholder="Text Input"
                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>Input (No indicator)</Label>
                        <Input
                            value={textDef}
                            onChange={setTextDef}
                            hasIndicator={false}
                            placeholder="Text Input"
                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>Input ( with  value )</Label>
                        <Input
                            value={text}
                            onChange={setText}
                            hasIndicator={true}
                            placeholder="Input placeholder"

                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>Input ( default )</Label>
                        <Input
                            value={text}
                            onChange={setText}
                            hasIndicator={true}
                            placeholder="Input placeholder"
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Input ( valid )</Label>
                        <Input
                            value={text}
                            onChange={setText}
                            hasIndicator={true}
                            placeholder="Input placeholder"
                            isValid={true}
                        />
                    </FormField>

                    <FormField className="showcase-input" >
                        <Label>Input ( valid )</Label>
                        <Input
                            value={text}
                            onChange={setText}
                            hasIndicator={true}
                            placeholder="Input placeholder"
                            isValid={false}
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite">
            <h4>Input Types </h4>
            <div className="flex-row">

                <FormField className="showcase-input" >
                    <Label>Text ( default )</Label>
                    <Input
                        value={text}
                        onChange={setText}
                        hasIndicator={true}
                        placeholder="Text Input"
                    />
                </FormField>

                <FormField className="showcase-input" >
                    <Label>Password</Label>
                    <Input
                        type="password"
                        value={pass}
                        onChange={setPass}
                        hasIndicator={true}
                        placeholder="Password Input"
                    />
                </FormField>

                <FormField className="showcase-input" >
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={setEmail}
                        hasIndicator={true}
                        placeholder="Email Input"
                    />
                </FormField>

                <FormField className="showcase-input" >
                    <Label>Number</Label>
                    <Input
                        type="number"
                        value={num}
                        onChange={setNum}
                        hasIndicator={false}
                        placeholder="Number Input"
                    />
                </FormField>

            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default InputExample