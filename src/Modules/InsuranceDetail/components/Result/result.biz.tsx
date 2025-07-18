import { useState } from "react"

const useResult = () => {
    const resultOptions = [
        { label: "تعیین مکان انجام شد", value: "1" },
        { label: "آدرس اشتباه است", value: "2" },
        { label: "بیمه نامه باید ابطال و انفساخ شود", value: "3" },
        { label: "بیمه نامه تکراری است", value: "4" },
        { label: "ارجاع به ارزیاب همکار", value: "5" },
        { label: "ارائه به کمک ارزیاب", value: "6" },
        { label: "عدم همکاری بیمه گذار یا ذینفع", value: "7" },
        { label: "توقف عملیات", value: "8" }
    ]
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

    return {
        isInfoModalOpen, setIsInfoModalOpen, resultOptions
    }
}
export default useResult