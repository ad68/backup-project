import PageTitle from "@/components/kit/PageTitle"
import useDocumentUpload from "./documentUpload.biz"
import CustomButton from "@/components/kit/CustomButton"
import UploadStatus from './components/UploadStatus'
import { ChevronLeft, UploadCloudIcon } from "lucide-react"
export default function Index() {
    const { documents, startUpload, actionLoading } = useDocumentUpload()
    return <main className="pb-[80px]">
        <PageTitle title="لیست اسناد" />
        <div className="px-5">
            <CustomButton disabled={documents.length === 0} className="bg-purple-600 w-full" loading={actionLoading} onClick={() => startUpload()}>
                همگام سازی به حالت آنلاین
                <UploadCloudIcon />
            </CustomButton>
        </div>
        <section className="flex flex-col gap-2 px-5 mt-5">
            {documents.map((item, index) =>
            (<div key={index} className="flex justify-between relative  border-r-[3px] border-primary bg-slate-50 p-2 rounded-md  items-center gap-2">
                <div className="flex flex-col text-xs">
                    <div className="flex items-center">
                        <ChevronLeft className="w-[15px] text-blue-500" />
                        <span>مورد: </span>
                        <span>
                            {item.subjectId}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <ChevronLeft className="w-[15px] text-blue-500" />
                        <span>عنوان: </span>
                        <span>
                            {item.name}
                        </span>
                    </div>
                    <div className="flex items-center ">
                        <ChevronLeft className="w-[15px] text-blue-500" />
                        <span>حجم:</span>
                        <span className="text-green-600 font-semi">
                            {Math.floor(item.file.size / 1000)} Kb
                        </span>
                    </div>
                    <div className="bg-offline rounded-xl absolute top-[-5px] text-white left-0 px-5">{item.name.split(".")[1]}</div>
                </div>
                <UploadStatus status={item.status} />
            </div>))}

        </section>
    </main>
}
