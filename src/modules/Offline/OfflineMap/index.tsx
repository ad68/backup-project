
import MapBox from './components/MapBox'


export default function Index() {
    const farmLat = "35.7939"
    const farmLng = "47.2387"
    return (<>
        <MapBox farmLat={farmLat} farmLng={farmLng} />
    </>
    )
}
