import * as React from 'react';
import { AsyncButton, Button, ConfirmButton, FormField, IconButton, Label } from 'uxp/components';

interface IProps {

}

const ButtonsExample: React.FunctionComponent<IProps> = (props) => {
    let [buttonLoading, setButtonLoading] = React.useState<boolean>(false)


    return (<div className="section">
        <h3>Buttons</h3>

        <div className="showcase-section bgWhite" >
            <h4>Buttons</h4>
            <div className="example flex-row" >
                <FormField inline>
                    <Label>Button (default)</Label>
                    <Button
                        title="Sample Button"
                        onClick={() => {
                            setButtonLoading(true);
                            setTimeout(() => {
                                setButtonLoading(false)
                            }, 1000)
                        }}
                        icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                        loading={buttonLoading}
                    />
                </FormField>

                <FormField inline>
                    <Label>Button (active)</Label>
                    <Button
                        title="Sample Button"
                        onClick={() => alert("clicked")}
                        icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                        active
                    />
                </FormField>


                <FormField inline>
                    <Label>Button (disabled)</Label>
                    <Button
                        title="Sample Button"
                        onClick={() => alert("clicked")}
                        icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                        disabled
                    />
                </FormField>
                <FormField inline>
                    <Label>Button (loading - default)</Label>
                    <Button
                        title="Sample Button"
                        onClick={() => {
                            alert("clicked")
                        }}
                        icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                        loading
                    />
                </FormField>

                <FormField inline>
                    <Label>Button (loading - specified)</Label>
                    <Button
                        title="Sample Button"
                        onClick={() => alert("clicked")}
                        icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                        loading
                        loadingTitle="Loading..."
                    />
                </FormField>

                <FormField inline>
                    <Label>Button (Async)</Label>
                    <AsyncButton
                        title="Sample Button"
                        onClick={() => new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve("Resolved");
                            }, 1000)
                        })}
                        icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                    />
                </FormField>

                <FormField inline>
                    <Label>Confirm Button </Label>
                    <ConfirmButton
                        title="Delete Item"
                        // icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                        loading={buttonLoading}
                        onConfirm={() => alert("confirmed")}
                        onCancel={() => alert("canceled")}

                    />
                </FormField>

            </div>

            <div className="code">
            </div>
        </div>


        <div className="showcase-section bgWhite" >
            <h4>Icon Buttons </h4>
            <div className="example flex-row" >

                <FormField backgroundColor="white" inline>
                    <Label> Icon Buttons (default) </Label>
                    <IconButton type="search" />
                    <IconButton type="close" />
                    <IconButton type="done" />
                    <IconButton type="arrow-up" />
                    <IconButton type="arrow-down" />
                    <IconButton type="arrow-left" />
                    <IconButton type="arrow-right" />
                    <IconButton type="filter" />
                </FormField>

                <FormField inline>
                    <Label>IconButtons (different sizes) </Label>
                    <IconButton type="search" size="small" />
                    <IconButton type="search" />
                    <IconButton type="search" size="large" />
                </FormField>
            </div>

            <div className="code">
            </div>
        </div>

    </div >)
}

export default ButtonsExample