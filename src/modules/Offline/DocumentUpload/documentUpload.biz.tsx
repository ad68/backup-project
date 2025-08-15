import { STORES } from "@/constants/dbEnums";
import { useAxiosWithToken } from "@/hooks";
import { clearAndUpdateDocumentStore, getAllRecord, initOfflineDb } from "@/lib/indexdb";
import { objectToFormData } from "@/utils/global";
import { useEffect, useState } from "react"

const useDocumentUpload = () => {
    const [documents, setDocuments] = useState<Array<any>>([])
    const [actionLoading, setActionLoading] = useState(false)

    const [finish, setFinish] = useState(false)
    const getDocList = async () => {
        const db = await initOfflineDb()
        const list = await getAllRecord(db, STORES.Documents);
        setDocuments(list)
    }
    useEffect(() => {
        getDocList()
    }, [])
    useEffect(() => {
        if (finish) {
            console.log("documentsssssss", documents.filter((el) => el.status !== "success"))
            updateDb()
            setTimeout(() => {
                setFinish(false)
            }, 2000);
        }

    }, [finish])
    useEffect(() => {
        /*  console.log("main docccccc", documents) */
    }, [documents])
    const updateDb = async () => {
        await clearAndUpdateDocumentStore(documents.filter((el) => el.status !== "success"))
        getDocList()
    }
    const showFile = (item: any) => {
        console.log(objectToFormData(item))
        useAxiosWithToken.post("/sabka/technical/annex/add/subject-file", objectToFormData(item), {
            headers: { "Content-Type": "multipart/form-data" },
        })

    }
    const uploadItem = async (item: any, index: number) => {
        try {
            if (item.status !== "success") {
                setDocuments((prev) => {
                    const updated = [...prev];
                    updated[index] = { ...updated[index], status: "pending", result: "" };
                    return updated;
                });
                const res = await useAxiosWithToken.post("/sabka/technical/annex/add/subject-file", item, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setDocuments((prev) => {
                    const updated = [...prev];
                    updated[index] = { ...updated[index], status: "success", result: res.data };
                    return updated;
                });
            }

        } catch (error) {
            setDocuments((prev) => {
                const updated = [...prev];
                updated[index] = { ...updated[index], status: "error" };
                return updated;
            });
        }
    };
    const startUpload = async () => {
        setActionLoading(true)
        let index = 0;
        for (const item of documents) {
            await uploadItem(item, index);
            index++;
        }
        setActionLoading(false)
        setFinish(true)

        /*  await clearAndUpdateDocumentStore(documents.filter((el) => el.status !== "success"))
         getDocList() */
    };


    return {
        documents,
        showFile,
        startUpload,
        actionLoading
    }
}
export default useDocumentUpload