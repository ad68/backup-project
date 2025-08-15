import { useSearchParams } from 'react-router-dom';
import MapBox from './components/MapBox'


export default function Index() {
    const [searchParams] = useSearchParams()
    const farmLat = searchParams.get("lat")
    const farmLng = searchParams.get("lng")
    /* const featureId = searchParams.get("featureId") */
    const wkt = searchParams.get("wkt")


    return (<>
        {/*   {fetchLoading && <div className='fixed flex flex-col gap-2 justify-center items-center top-0 left-0 w-full h-full bg-white z-[1005]' >
            <ListLoader />
            <span className='text-lg text-primary'>لطفا چند لحظه صبر کنید</span>
        </div>} */}
        {wkt !== "null" && <MapBox farmLat={farmLat} farmLng={farmLng} defaultPolygon={wkt} />}
        {wkt === "null" && <MapBox farmLat={farmLat} farmLng={farmLng} />}

    </>

    )
}
