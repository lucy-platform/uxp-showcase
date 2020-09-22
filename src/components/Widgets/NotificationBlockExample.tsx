import * as React from 'react';
import { NotificationBlock } from 'uxp/components';

interface IProps {

}

const NotificationBlockExample: React.FunctionComponent<IProps> = (props) => {

    return (<div className="section">
        <h3>Notification Block</h3>

        <div className="showcase-section inline bgWhite" >
            <h4>Notification Block</h4>
            <div className="example" >

                <NotificationBlock
                    message="-- End Of Content --"
                    class="end-of-content"
                />
            </div>

            <div className="code">
            </div>
        </div>



    </div >)
}

export default NotificationBlockExample