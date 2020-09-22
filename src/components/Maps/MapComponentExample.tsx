import * as React from 'react';
import { MapComponent } from 'uxp/components';

interface IProps {

}

const MapComponentExample: React.FunctionComponent<IProps> = (props) => {

    return (<div className="section">
        <h3>Map</h3>

        <div className="showcase-section bgWhite" >
            <h4>Map (basic)</h4>

            <div className="example" style={{ width: "100%", height: 400 }}>
                <MapComponent
                    mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    markers={[]}
                    onMarkerClick={(el, data) => {
                        console.log(el)
                        console.log(data)
                    }}
                    zoom={4}
                    center={{ position: { latitude: 6.927079, longitude: 79.861244 }, renderMarker: false }}

                />
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite" >
            <h4>Map (with markers)</h4>

            <div className="example" style={{ width: "100%", height: 400 }}>
                <MapComponent
                    mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    markers={[
                        {
                            latitude: 6.927079,
                            longitude: 79.861244,
                            data: {
                                name: "sri lanka"
                            }
                        },
                        {
                            latitude: 1.290270,
                            longitude: 103.851959,
                            data: {
                                name: "singapore"
                            }
                        }

                    ]}
                    onMarkerClick={(el, data) => {
                        console.log(el)
                        console.log(data)
                    }}
                    zoom={4}
                />
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section bgWhite" >
            <h4>Map (With regions)</h4>

            <div className="example" style={{ width: "100%", height: 400 }}>
                <MapComponent
                    mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    markers={[]}
                    onMarkerClick={(el, data) => {
                        console.log(el)
                        console.log(data)
                    }}
                    center={{ position: { latitude: 6.927079, longitude: 79.861244 }, renderMarker: false }}
                    zoom={9}
                    regions={[
                        {
                            type: "circle",
                            bounds: { center: [6.927079, 79.861244], radius: 20000 },
                            // hideStroke: true,
                            color: "green",
                        },
                        {
                            type: "rectangle",
                            bounds: [[6.951829526, 80.217665796], [6.666861, 80.704808]],
                            color: "red",
                        },
                        {
                            type: "polygon",
                            bounds: [[6.951829526, 80.217665796], [7.227612, 80.198303], [7.291418, 80.636696]],
                            color: "purple",
                            data: "sample data"
                        }
                    ]}

                />
            </div>

            <div className="code">
            </div>
        </div>



    </div >)
}

export default MapComponentExample