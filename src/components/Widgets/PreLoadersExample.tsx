import * as React from 'react';
import { BarChartLoader, DefaultLoader, DonutChartLoader, GaugeLoader, HeatmapChartLoader, Loading } from 'uxp/components';

interface IProps {

}

const PreLoadersExample: React.FunctionComponent<IProps> = (props) => {

    return (<div className="section">
        <h3>Pre loaders</h3>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>

            <div className="showcase-section " style={{ width: '30%', height: '400px' }} >
                <h4>Default Loader</h4>
                <div className="example" >
                    <DefaultLoader />
                </div>

                <div className="code">
                </div>
            </div>

            <div className="showcase-section " style={{ width: '30%', height: '400px' }} >
                <h4>Bar Chart Loader</h4>
                <div className="example" >
                    <BarChartLoader />
                </div>

                <div className="code">
                </div>
            </div>

            <div className="showcase-section " style={{ width: '30%', height: '400px' }} >
                <h4>Donut Chart Loader</h4>
                <div className="example" >
                    <DonutChartLoader />
                </div>

                <div className="code">
                </div>
            </div>

            <div className="showcase-section " style={{ width: '30%', height: '400px' }} >
                <h4>Heatmap Chart Loader</h4>
                <div className="example" >
                    <HeatmapChartLoader />
                </div>

                <div className="code">
                </div>
            </div>

            <div className="showcase-section " style={{ width: '30%', height: '400px' }} >
                <h4>Gauge Loader</h4>
                <div className="example" >
                    <GaugeLoader />
                </div>

                <div className="code">
                </div>
            </div>

        </div>
    </div>)
}

export default PreLoadersExample