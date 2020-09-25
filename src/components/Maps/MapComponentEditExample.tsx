import * as React from 'react';
import { Button, FormField, IconButton, MapComponent, NotificationBlock, WidgetWrapper } from 'uxp/components';

interface IProps { }

const MapComponentEditExample: React.FunctionComponent<IProps> = (props) => {

    let [regions, setRegions] = React.useState<any[]>([])
    let [isAddingRegion, setIsAddingRegion] = React.useState<boolean>(false)

    let regionCoords = React.useRef<any[]>([])

    React.useEffect(() => {
        setRegions([
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
        ])
    }, [])

    // React.useEffect(() => {
    //     console.log(regions)
    // }, [regions])

    const addRegion = () => {
        let _regions = [...regions];
        _regions.push({
            type: "polygon",
            bounds: [],
            color: "purple"
        })

        setIsAddingRegion(true);
        // setRegions(_regions)
    }

    const onClickMap = (e: any) => {
        if (isAddingRegion) {

            let _regions = [...regions];
            if (regionCoords.current.length > 0) {
                _regions.pop();
            }

            // get lat long
            let coords = [e.latlng.lat, e.latlng.lng];
            regionCoords.current.push(coords)

            _regions.push({
                type: "polygon",
                bounds: [regionCoords.current],
                color: "purple"
            })

            setRegions(_regions);
        }
    }

    return (<WidgetWrapper>
        <FormField className="map-tb">

            {
                isAddingRegion ? <div className="map-tb-notification">
                    <p>Please click on the map to mark new region</p>
                    <Button title="Done" onClick={() => { setIsAddingRegion(false); regionCoords.current = []; }} />
                </div>
                    :
                    <Button title="Add new Region" onClick={addRegion} />

            }
        </FormField>

        <div className="example" style={{ width: "100%", height: 400 }}>
            <MapComponent
                mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                markers={[]}
                onMarkerClick={(el, data) => {
                    console.log(el)
                    console.log(data)
                }}
                center={{ position: { latitude: 6.927079, longitude: 79.861244 }, renderMarker: false }}
                zoom={7}
                regions={regions}
                onClick={onClickMap}
            />
        </div>
    </WidgetWrapper>)
}

export default MapComponentEditExample