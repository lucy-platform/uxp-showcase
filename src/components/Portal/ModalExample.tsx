import * as React from 'react';
import { Button, Modal } from 'uxp/components';

const ModalExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [show, setShow] = React.useState<boolean>(false)

    return (<div className="section">
        <h3>Modal</h3>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Modal (default)</h4>

            <div className="example">
                <Button onClick={() => { setShow(true) }} title="Show Modal" />

                <Modal
                    show={show}
                    onOpen={() => { }}
                    onClose={() => setShow(false)}
                >
                    <h1>This is a sample modal</h1>
                    <p>Default modal</p>
                </Modal>
            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default ModalExample