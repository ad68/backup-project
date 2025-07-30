import { MapPinIcon, UploadCloudIcon } from "lucide-react"
import useInsuranceLocation from "./insuranceLocation.biz"
/* import Card from './components/Card' */
import { Switch } from "@/components/ui/switch"
import SlidingModal from "@/components/kit/SlidingModal"
import AddPolygonModal from './components/AddPolygonModal'
import AddDocumentModal from './components/AddDocumentModal'
import { useSearchParams } from "react-router-dom"
import ListLoader from "@/components/kit/ListLoader"
import CustomButton from "@/components/kit/CustomButton"
import PageTitle from "@/components/kit/PageTitle"

export default function Index() {
    const { isAddPolygonModalOpen, isAddDocumentModalOpen, selectedFile, setSelectedFile, setIsAddDocumentModalOpen, geoInWkt, setGeoInWkt, setIsAddPolygonModalOpen, fetchLoading, featureData, actionLoading, setSubjectNotExist, saveLocationData, farmLat, farmLng } = useInsuranceLocation()

    const [setSearchParams] = useSearchParams()
    const farmerName = setSearchParams.get("farmerName")
    const policyId = setSearchParams.get("policyId")
    return <>
        <PageTitle size='small' miniDescription={`بیمه نامه: ${policyId}`} title={`${farmerName}`} />
        <section className='m-auto max-w-5xl'>
            <section className="p-2">
                <section className="border border-slate-200 rounded-lg p-2">
                    <span className='block text-center'>تعیین مکان</span>
                    <hr className='border-slate-300 my-1' />
                    <section dir="ltr" className="flex gap-1 mt-2 justify-end">
                        <Switch onCheckedChange={(e) => setSubjectNotExist(e)} />
                        <span className="text-sm">مورد وجود ندارد</span>
                    </section>
                    <section className="text-xs mt-1 font-light ">
                        در صورت عدم مطابقت موضوع، حدود اربعه، و یا کلاً عدم وجود محل
                    </section>
                </section>
            </section>
            <section className="p-2">
                <section className="border border-slate-200  rounded-lg p-2">
                    <span className='block text-center'>مکان</span>
                    <hr className='border-slate-300 my-1' />
                    <section className="flex justify-between gap-2 py-2">
                        <button onClick={() => setIsAddPolygonModalOpen(true)} className="border w-[190px] bg-blue-500  border-blue-500 text-white  shadow-md h-[30px] flex justify-center items-center gap-2 rounded-full">
                            <MapPinIcon className="w-[18px]" />
                            <span className="font-light text-sm">تعیین مکان از روی نقشه</span>
                        </button>
                        <button onClick={() => setIsAddDocumentModalOpen(true)} className="border w-[130px] bg-red-500 border-red-500 text-white shadow-md h-[30px] flex justify-center  items-center gap-2 rounded-full">
                            <span className="font-light text-sm">ارسال فایل</span>
                            <UploadCloudIcon className="w-[18px]" />
                        </button>
                    </section>
                    <section className="flex flex-col gap-1">
                        {fetchLoading && <section className="flex justify-center"><ListLoader /></section>}

                    </section>
                </section>
            </section>
            <div className="p-2">
                <section className="flex border-[1px] gap-2 border-slate-200 rounded-lg p-2">
                    <span>وضعیت تعیین مکان:</span>
                    {(geoInWkt || selectedFile) ? <span className="text-primary">تعیین شده</span> : <span className="text-red-500">تعیین نشده</span>}
                </section>
            </div>

            <section className="flex px-2 bg-white bottom-0 gap-2 mt-4 py-3 justify-end w-full">
                <CustomButton loading={actionLoading} onClick={saveLocationData} className="rounded-full w-full">
                    <span>ثبت نهایی</span>
                </CustomButton>
            </section>
            <SlidingModal isOpen={isAddPolygonModalOpen} setIsOpen={setIsAddPolygonModalOpen}>
                <AddPolygonModal farmLat={farmLat} farmLng={farmLng} defaultPolygon={featureData} setIsAddPolygonModalOpen={setIsAddPolygonModalOpen} setGeoInWkt={setGeoInWkt} />
            </SlidingModal>
            <SlidingModal isOpen={isAddDocumentModalOpen}>
                <AddDocumentModal setIsAddDocumentModal={setIsAddDocumentModalOpen} setSelectedFile={setSelectedFile} />
            </SlidingModal>
        </section>
    </>
}
