import * as React from 'react';
import { Loading } from 'uxp/components';

interface IProps {

}

const LoadingBlockExample: React.FunctionComponent<IProps> = (props) => {

    return (<div className="section">
        <h3>Loading Block</h3>

        <div className="showcase-section inline bgWhite" >
            <h4>Loading Block</h4>
            <div className="example" >

                <Loading />
            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default LoadingBlockExample