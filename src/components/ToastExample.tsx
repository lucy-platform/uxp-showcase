import * as React from 'react';
import { Button, Checkbox, FormField, Input, Label, useToast } from 'uxp/components';

const ToastExample: React.FunctionComponent<{}> = (props) => {

    // states
    let [autoClose, setAutoClose] = React.useState<boolean>(true)
    let [closeAfter, setCloseAfter] = React.useState<string>("2000")

    let Toast = useToast();

    return (<div className="section">
        <h3>Toasts</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Toasts</h4>
            <div className="example">
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                    <FormField inline>
                        <Checkbox
                            checked={autoClose}
                            onChange={setAutoClose}
                            label="Auto Close"
                        />
                    </FormField>

                    <FormField inline>
                        <Label inline> Close After </Label>
                        <Input
                            value={closeAfter}
                            onChange={setCloseAfter}
                            inline
                        />
                    </FormField>
                </div>

                <div style={{ width: "100%", marginTop: "40px" }}>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.success({ "content": "Success toast message", "autoClose": autoClose, closeAfter: parseInt(closeAfter) })}
                            title="Success toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.error({ "content": "Error toast message", "autoClose": autoClose, closeAfter: parseInt(closeAfter) })}
                            title="Error toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.warning({ "content": "Warning toast message", "autoClose": autoClose, closeAfter: parseInt(closeAfter) })}
                            title="Warning toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.info({ "content": "Info toast message", "autoClose": autoClose, closeAfter: parseInt(closeAfter) })}
                            title="Info toast"
                        />
                    </FormField>
                </div>

            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default ToastExample