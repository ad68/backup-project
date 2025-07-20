import { DownloadIcon } from "lucide-react";

export default function Index() {
    return <main className='m-auto w-[440px] max-w-full px-2'>
        <h1 className="font-bold block m-auto text-2xl mt-5 top-5 text-center">قوانین و مقررات</h1>
        <div className="flex items-center px-4 gap-2 mt-5 border border-blue-500 p-2 rounded-full text-blue-500">
            <DownloadIcon className="w-[40px]" />
            <a href="/download/2.pdf">دانلود بخشنامه شماره 5 بیمه فراگیر </a>
        </div>
        <div className="flex items-center px-4 gap-2 mt-5  border border-blue-500 p-2 rounded-full text-blue-500">
            <DownloadIcon className="w-[40px]" />
            <a href="/download/1.pdf"> دانلود بخشنامه چهارم طرح بیمه فراگیر اجباری</a>
        </div>
        <div className="flex items-center  px-4 gap-2 mt-5  border border-blue-500 p-2 rounded-full text-blue-500">
            <DownloadIcon className="w-[40px]" />
            <a href="/download/3.pdf"> دانلود تسریع در ارجاع بسته های پیوست فنی محصولات زراعی</a>
        </div>
        <div className="flex items-center px-4 gap-2 mt-5  border border-blue-500 p-2 rounded-full text-blue-500">
            <DownloadIcon className="w-[40px]" />
            <a href="/download/4.pdf">دانلود تعرفه بازنگری شده سال 1404-1403 میگوی پرورشی</a>
        </div>
    </main>
}
