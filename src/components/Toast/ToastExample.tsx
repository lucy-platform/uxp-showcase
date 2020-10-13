import * as React from 'react';
import { Button, Checkbox, FormField, Input, Label, useToast } from 'uxp/components';

const ToastExample: React.FunctionComponent<{}> = (props) => {

    // states
    let [autoClose, setAutoClose] = React.useState<boolean>(true)
    let [closeAfter, setCloseAfter] = React.useState<string>("2000")
    let [title, setTitle] = React.useState<string>("")
    let [content, setContent] = React.useState<string>("")
    let [icon, setIcon] = React.useState<string>("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC43NSIgaGVpZ2h0PSIyOC43NSIgdmlld0JveD0iMCAwIDI4Ljc1IDI4Ljc1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTIwLjgsMTcuMTQ4QTMuNjQ4LDMuNjQ4LDAsMSwxLDE3LjE0OCwxMy41LDMuNjQ4LDMuNjQ4LDAsMCwxLDIwLjgsMTcuMTQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjczIC0yLjI3MykiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIzLjg3MywxOC41MjNhMi4wMDYsMi4wMDYsMCwwLDAsLjQsMi4yMTNsLjA3My4wNzNhMi40MzMsMi40MzMsMCwxLDEtMy40NDEsMy40NDFsLS4wNzMtLjA3M0EyLjAyMywyLjAyMywwLDAsMCwxNy40LDI1LjYxMXYuMjA3YTIuNDMyLDIuNDMyLDAsMSwxLTQuODY0LDB2LS4xMDlhMi4wMDYsMi4wMDYsMCwwLDAtMS4zMTMtMS44MzYsMi4wMDYsMi4wMDYsMCwwLDAtMi4yMTMuNGwtLjA3My4wNzNBMi40MzMsMi40MzMsMCwxLDEsNS41LDIwLjkwNmwuMDczLS4wNzNBMi4wMjMsMi4wMjMsMCwwLDAsNC4xMzksMTcuNEgzLjkzMmEyLjQzMiwyLjQzMiwwLDEsMSwwLTQuODY0aC4xMDlhMi4wMDYsMi4wMDYsMCwwLDAsMS44MzYtMS4zMTMsMi4wMDYsMi4wMDYsMCwwLDAtLjQtMi4yMTNMNS40LDguOTQxQTIuNDMzLDIuNDMzLDAsMSwxLDguODQ0LDUuNWwuMDczLjA3M2EyLjAwNiwyLjAwNiwwLDAsMCwyLjIxMy40aC4xYTIuMDA2LDIuMDA2LDAsMCwwLDEuMjE2LTEuODM2VjMuOTMyYTIuNDMyLDIuNDMyLDAsMSwxLDQuODY0LDB2LjEwOWEyLjAyMywyLjAyMywwLDAsMCwzLjQyOSwxLjQzNWwuMDczLS4wNzNBMi40MzMsMi40MzMsMCwxLDEsMjQuMjUsOC44NDRsLS4wNzMuMDczYTIuMDA2LDIuMDA2LDAsMCwwLS40LDIuMjEzdi4xYTIuMDA2LDIuMDA2LDAsMCwwLDEuODM2LDEuMjE2aC4yMDdhMi40MzIsMi40MzIsMCwxLDEsMCw0Ljg2NGgtLjEwOWEyLjAwNiwyLjAwNiwwLDAsMC0xLjgzNiwxLjIxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L2c+PC9zdmc+")

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

                    <FormField inline>
                        <Label inline> Title </Label>
                        <Input
                            value={title}
                            onChange={setTitle}
                            inline
                        />
                    </FormField>

                    <FormField inline>
                        <Label inline> Content </Label>
                        <Input
                            value={content}
                            onChange={setContent}
                            inline
                        />
                    </FormField>
                </div>

                <div style={{ width: "100%", marginTop: "40px" }}>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.success({
                                title: title ? title : "Success",
                                content: content ? content : "Success toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Success toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.error({
                                title: title ? title : "Error",
                                content: content ? content : "Error toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Error toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.warning({
                                title: title ? title : "Warning",
                                content: content ? content : "Warning toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Warning toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.info({
                                title: title ? title : "Info",
                                content: content ? content : "Info toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Info toast"
                        />
                    </FormField>
                </div>

            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Toasts (no title) </h4>
            <div className="example">
                <div style={{ width: "100%", marginTop: "40px" }}>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.success({
                                content: content ? content : "Success toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Success toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.error({
                                content: content ? content : "Error toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Error toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.warning({
                                content: content ? content : "Warning toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Warning toast"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.info({
                                content: content ? content : "Info toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Info toast"
                        />
                    </FormField>
                </div>

            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Toasts (Custom Icon)</h4>
            <div className="example">
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                    <FormField inline>
                        <Label inline> Icon </Label>
                        <Input
                            value={icon}
                            onChange={setIcon}
                            inline
                        />
                    </FormField>
                </div>

                <div style={{ width: "100%", marginTop: "40px" }}>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.info({
                                icon: icon,
                                content: content ? content : "Configuration Required",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Toast with custom image"
                        />
                    </FormField>


                </div>

            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Toasts (Custom)</h4>
            <div className="example">

                <div style={{ width: "100%", marginTop: "40px" }}>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.custom({
                                content: "Custom toast message",
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Custom Toast (message only)"
                        />
                    </FormField>
                    <FormField inline>
                        <Button
                            onClick={() => Toast.custom({
                                content: () => <>
                                    <div className="content">
                                        Rate Your Experience
                                    </div>
                                    <div className="rating">
                                        <div className="star filled"></div>
                                        <div className="star filled"></div>
                                        <div className="star filled"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                </>,
                                autoClose: autoClose,
                                closeAfter: parseInt(closeAfter)
                            })}
                            title="Custom Toast"
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