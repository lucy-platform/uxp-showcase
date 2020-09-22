import * as React from 'react';
import { Button, LinkWidgetContainer } from 'uxp/components';


interface ILinkWidgetContainerExampleProps {

}

const LinkWidgetContainerExample: React.FunctionComponent<ILinkWidgetContainerExampleProps> = (props) => {

    let [show, setShow] = React.useState(false)

    return <div className="section">
        <h3>Link Widget Container</h3>

        <div className="showcase-section bgWhite">
            <h4>Link Widget Container</h4>
            <div className="example">
                <Button title="Click to show Link Widget Container" onClick={() => { setShow(true) }} />

                <LinkWidgetContainer
                    show={show}
                    onClose={() => { setShow(false) }}
                    title="Link Widget Container"

                ></LinkWidgetContainer>
            </div>

            <div className="code">
            </div>
        </div>


    </div>
}

export default LinkWidgetContainerExample