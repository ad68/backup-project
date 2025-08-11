import { useSearchParams } from 'react-router-dom';
import MapBox from './components/MapBox'
import { useEffect, useState } from 'react';
import { useAxiosWithToken } from '@/hooks';

import ListLoader from '@/components/kit/ListLoader';
export default function Index() {
    const [searchParams] = useSearchParams()
    const farmLat = searchParams.get("lat")
    const farmLng = searchParams.get("lng")
    const featureId = searchParams.get("featureId")
    const subjectId = searchParams.get("subjectId")
    const reviewId = searchParams.get("reviewId")
    const [featureData, setFeatureData] = useState<any>()
    const [fetchLoading, setFetchLoading] = useState<boolean>(false)
    /*    const polygonPoints: L.LatLngTuple[] = [
           [36.247267, 49.976506],
           [36.251126, 49.977858],
           [36.249603, 49.974833],
       ]; */
    const getFeatureInfo = () => {
        setFetchLoading(true)
        const params = {
            reviewId: reviewId,
            subjectId: subjectId,
            featureId: featureId === "null" ? null : featureId
        }
        useAxiosWithToken.post("/sabka/technical/annex/get/feature", params).then(res => {
            setFeatureData(res.data.wkt)

        }).finally(() => setFetchLoading(false))
    }
    useEffect(() => {
        if (featureId && featureId !== "null") {
            getFeatureInfo()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (<>
        {fetchLoading && <div className='fixed flex flex-col gap-2 justify-center items-center top-0 left-0 w-full h-full bg-white z-[1005]' >
            <ListLoader />
            <span className='text-lg text-primary'>لطفا چند لحظه صبر کنید</span>
        </div>}
        {(featureId && featureId !== "null" && featureData) && <MapBox farmLat={farmLat} farmLng={farmLng} defaultPolygon={featureData} />}
        {featureId === "null" && <MapBox farmLat={farmLat} farmLng={farmLng} />}

    </>

    )
}
