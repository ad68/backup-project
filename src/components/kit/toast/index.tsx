// utils/toast.ts
import { toast } from 'react-hot-toast';
import type { Toast } from 'react-hot-toast';
import './style.css'
import { CheckIcon, InfoIcon, TriangleAlert, XIcon } from 'lucide-react';
import type { ReactNode } from 'react';
type ToastType = 'success' | 'error' | 'warning' | 'info';

const toastColors: Record<ToastType, string> = {
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
};
const toastPipeColors: Record<ToastType, string> = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-600',
};
const toastIcon: Record<ToastType, ReactNode> = {
    success: <span className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#2ff8724a]  shadow-xl'>
        <span className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-green-500 shadow-xl'>
            <CheckIcon color='white' />
        </span>
    </span>,
    error: <span className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#ef44444a]  shadow-xl'>
        <span className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-red-500 shadow-xl'>
            <XIcon color='white' />
        </span>
    </span>,
    warning: <span className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#efde444a]  shadow-xl'>
        <span className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-yellow-500 shadow-xl'>
            <TriangleAlert color='white' className='w-[20px]' />
        </span>
    </span>,
    info: <span className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#446cef4a]  shadow-xl'>
        <span className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-blue-500 shadow-xl'>
            <InfoIcon color='white' />
        </span>
    </span>,
};

export const showToast = (type: ToastType, message: string) => {
    toast.custom((t: Toast) => (
        <section
            className={`px-4 py-3 bg-white flex min-h-[60px] justify-start items-center gap-3 rounded-xl border shadow-2xl max-w-sm w-full relative  ${toastColors[type]
                } ${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
            <span className={`block w-[5px] rounded-full h-[100%] ${toastPipeColors[type]}`}></span>
            <div className="flex w-full items-center rounded-full justify-between gap-3">
                <span className="text-sm font-medium">{message}</span>
                {toastIcon[type]}
                {/*  <button onClick={() => toast.dismiss(t.id)} className="text-sm bg-white rounded-full opacity-50"><XIcon className='w-[30px] h-[30px] text-red-500 left-0 top-[-10px]' /></button> */}
            </div>
            <section className='flex w-full justify-center absolute  left-0 bottom-[-15px]'>
                <button className='w-[30px] h-[30px] rounded-full bg-white  flex justify-center items-center shadow-2xl p-1 text-white' onClick={() => toast.dismiss(t.id)}>
                    <XIcon className='text-slate-400 w-[20px]' />
                </button>
            </section>

        </section>
    ));
};


export const toastSuccess = (msg: string) => showToast('success', msg);
export const toastError = (msg: string) => showToast('error', msg);
export const toastWarning = (msg: string) => showToast('warning', msg);
export const toastInfo = (msg: string) => showToast('info', msg);
