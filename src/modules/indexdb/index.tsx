import CustomButton from "@/components/kit/CustomButton";
import { toastError, toastSuccess } from "@/components/kit/toast";
import { Button } from "@/components/ui/button";
import { STORES } from "@/constants/dbEnums";
import { addRecordToDb, deleteRecordFromDb, getAllRecord, getRecordById, initOfflineDb, updateRecordInDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";

export default function Index() {

    const [list, setList] = useState<any>([])
    const getAllData = async () => {
        const db = await initOfflineDb()
        try {
            const list = await getAllRecord(db, STORES.TASKS);
            setList(list)
        }
        catch (err: unknown) {
            console.log(err)
            toastError("خطا در ذخیره اطلاعات")
        }
    }
    const saveData = async () => {
        const db = await initOfflineDb()
        try {
            const newUserId = await addRecordToDb(db, STORES.TASKS, { name: 'amir', personalCode: 445 });
            toastSuccess(`ID کاربر جدید: ${newUserId}`)
            getAllData()
        }
        catch (err: unknown) {
            console.log(err)
            toastError("خطا در ذخیره اطلاعات")
        }
    }
    const handleDelete = async (id: number) => {
        const db = await initOfflineDb();
        try {
            await deleteRecordFromDb(db, STORES.TASKS, id);
            getAllData()
            toastSuccess("حذف شد");
        } catch (err) {
            console.error(err);
            toastError("خطا در حذف رکورد");
        }
    };
    const getById = async (id: number) => {
        const db = await initOfflineDb();
        const task = await getRecordById(db, STORES.TASKS, id);
        console.log(task);
    }
    const updateRecord = async () => {
        const db = await initOfflineDb();
        const task = await updateRecordInDb(db, STORES.TASKS, { name: "hasan", personalCode: 123 });
        getAllData()
        console.log(task);
    }
    useEffect(() => {
        getAllData()
    }, [])

    return <section className="max-w-7xl m-auto  mt-20">
        <CustomButton onClick={saveData}>save data</CustomButton>

        <table>
            <tbody>
                {list.map((item: any, index: number) => (<tr key={index}>
                    <td>{index + 1}-</td>
                    <td> {item.name}</td>
                    <td> {item.personalCode}</td>
                    <td><Button className="bg-red-500" onClick={() => handleDelete(item.personalCode)}>حذف</Button></td>
                    <td>  <Button className="bg-blue-500" onClick={() => getById(item.personalCode)}>get by id</Button></td>
                    <td>  <Button className="bg-blue-500" onClick={() => updateRecord()}>update</Button></td>
                </tr>))}
            </tbody>


        </table>
    </section>
}
