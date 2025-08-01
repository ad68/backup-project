import CustomButton from "@/components/kit/CustomButton";
import PageTitle from "@/components/kit/PageTitle";

import useLocationWithFile from "./locationWithFile.biz";


export default function Index() {
    const { actionLoading, fileHandleChange, saveFile, inputFile } = useLocationWithFile()
    return <section className="px-3  w-[440px] m-auto max-w-full gap-10 items-center">
        <PageTitle size='small' title="(gpx یا kml) ارسال فایل" />
        <div className="flex justify-center">
            <input
                type="file"
                ref={inputFile}
                className="mt-4"
                onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                        fileHandleChange(file)
                    }
                }}
            />
        </div>
        <section className="flex px-2 bg-white bottom-0 gap-2 mt-4 py-3 justify-end w-full">
            <CustomButton loading={actionLoading} onClick={saveFile} className="rounded-full w-full">
                <span>تایید</span>
            </CustomButton>
        </section>
    </section>
}
