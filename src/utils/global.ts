import moment from "moment-jalaali"
export const persianToEnglishNumber = (input: string) => {
    const persianDigits: string[] = [
        '۰',
        '۱',
        '۲',
        '۳',
        '۴',
        '۵',
        '۶',
        '۷',
        '۸',
        '۹',
    ]
    const englishDigits: string[] = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]

    return input
        .split('')
        .map((char: string): string => {
            const index = persianDigits.indexOf(char)
            return index !== -1 ? englishDigits[index] : char
        })
        .join('')
}

export const gregorianToJalali = (value: string | undefined) => {
    if (value) {
        const persianDate = moment(value).format('jYYYY/jMM/jDD')
        return persianDate
    } else {
        return value
    }
}
export const jalaliToGregorian = (value: string) => {
    if (value) {
        const greDate = moment(
            persianToEnglishNumber(value),
            'jYYYY/jMM/jDD',
        ).format('YYYY-MM-DD')
        return greDate
    }
    return ''
}
export const GregorianToJalaliMonthName = (value: string | undefined) => {
    if (value) {
        return moment(value).format('jD jMMMM jYYYY');
    } else {
        return value
    }

}
export const dateToTime = (value: string | undefined) => {
    if (value) {

        return moment(value).format("HH:mm")
    }
    return ''
}
export const gregorianToJalaliDateTime = (value: string) => {
    if (value) {

        return `${gregorianToJalali(value)} ${moment(value).format("HH:mm")}`
    }
    return ''
}
export const getPersianDate = (): string => {
    moment.loadPersian({ usePersianDigits: false });
    const now = moment();
    const weekday = now.format('dddd'); // مثلا "سه‌شنبه"
    const day = now.format('jD');       // مثلا "13"
    const month = now.format('jMMMM');  // مثلا "خرداد"
    const year = now.format('jYYYY');   // مثلا "1404"
    return `${weekday} ${day} ${month} ${year}`;
};
export const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result as string);
        };

        reader.onerror = error => {
            reject(error);
        };
    });
};