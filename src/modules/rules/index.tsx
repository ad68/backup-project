import { DownloadIcon } from "lucide-react";

export default function Index() {
    const base = "https://cc.bakapp.ir/constant-content/bakapp-info"
    const arr = [
        { id: 1, title: "بخشنامه شماره 5 بیمه فراگیر", url: base + "/1.pdf" },
        { id: 2, title: "تسریع در ارجاع بسته های پیوست فنی محصولات زراعی", url: base + "/2.pdf" },
        { id: 3, title: "تعرفه بازنگری شده سال 1404-1403 میگوی پرورشی", url: base + "/3.pdf" },
        { id: 4, title: "بخشنامه چهارم طرح بیمه فراگیر اجباری", url: base + "/4.pdf" },
        { id: 5, title: "شیوه‌نامه انجام عملیات پیوست فنی- دستورالعمل پیوست فنی", url: base + "/5.pdf" },
        { id: 6, title: "شیوه‌نامه انجام عملیات پیوست فنی- اصلاحیه شیوه نامه پیوست فنی", url: base + "/6.pdf" },
        { id: 7, title: "بخشنامه دوم طرح بیمه فراگیر اجباری", url: base + "/7.jpg" },
        { id: 8, title: "نامه قائم مقام محترم صندوق بیمه به مشاور محترم وزیر و مدیر کل دفتر هماهنگی امور استان‌ها پیرامون اجرای طرح بیمه فراگیر اجباری محصولات زراعی", url: base + "/8.jpg" },
        { id: 9, title: "نامه معاون وزیر جناب دکتر مهاجر در رابطه با بیمه فراگیر", url: base + "/9.jpg" },
        { id: 10, title: "بخشنامه اول طرح بیمه فراگیر اجباری", url: base + "/10.jpg" },
        { id: 11, title: "دستورالعمل اختصاصی بیمه تنه درخت خرما", url: base + "/11.pdf" },
    ]
    return <main className='m-auto w-[440px] max-w-full px-2'>
        <h1 className="font-bold block m-auto text-2xl mt-5 top-5 text-center">قوانین و مقررات</h1>
        {arr.map((item, index) => (
            <div key={index} className="flex items-center px-4 gap-2 mt-5 border border-blue-500 p-2 rounded-full text-blue-500">
                <DownloadIcon className="w-[40px]" />
                <a href={item.url} target="_blank">{item.title}</a>
            </div>
        ))}


    </main>
}
