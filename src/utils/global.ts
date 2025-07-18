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


export const getImageFormatFromBase64 = (base64: string): string | null => {
    const match = base64.match(/^data:image\/([a-zA-Z0-9+]+);base64,/);
    return match ? match[1] : null;
};
export const getPureBase64 = (base64: string): string => {
    const index = base64.indexOf("base64,");
    return index !== -1 ? base64.slice(index + 7) : base64;
};



export const WKTToPolygon = (wkt: string): [number, number][] => {
    if (!wkt.startsWith("POLYGON ((") || !wkt.endsWith("))")) {
        throw new Error("Invalid WKT POLYGON format");
    }
    const coordinatesPart = wkt
        .replace("POLYGON ((", "")
        .replace("))", "")
        .trim();

    const points = coordinatesPart.split(",").map((point) => {
        const [lng, lat] = point.trim().split(" ").map(Number);
        return [lat, lng] as [number, number];
    });

    return points;
};