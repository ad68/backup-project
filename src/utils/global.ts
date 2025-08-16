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
export const convertPersianNumbersToEnglish = (input: string): string => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return input.replace(/[۰-۹]/g, (char) => {
        const index = persianNumbers.indexOf(char);
        return index !== -1 ? englishNumbers[index] : char;
    });
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
            convertPersianNumbersToEnglish(value),
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
    const weekday = now.format('dddd');
    const day = now.format('jD');
    const month = now.format('jMMMM');
    const year = now.format('jYYYY');
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
export const getExtensionFromFileName = (filename: string): string | null => {
    const match = filename.match(/\.([a-zA-Z0-9]+)$/);
    return match ? match[1].toLowerCase() : null;
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
export const convertToJSONStringWithEscapes = (input: Record<string, any>): string => {
    const jsonString = JSON.stringify(input);
    return jsonString
    /* return JSON.stringify(jsonString); */
}
export const parseEscapedJson = (input: string): Record<string, unknown> => {
    try {
        const cleaned = input.replace(/\\"/g, '"'); // حذف اسلش‌ها
        return JSON.parse(cleaned);
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return {};
    }
}
export const toPersianDate = (date: Date): string => {
    // باید جلالی رو فعال کنیم
    moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

    return moment(date).format("jYYYY/jMM/jDD"); // jYYYY,jMM,jDD برای سال، ماه، روز شمسی
}
export const shamsiToMiladi = (value: any) => {
    if (value) {
        return jalaliToGregorian(toPersianDate(value))
    }
    else {
        return value
    }
}
export const JSONStringToObject = <T = Record<string, any>>(str: string): T | null => {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return null;
    }
};
export const plus1000 = (value: any) => {
    if (Number(value) > 1000) {
        return "1000+"
    }
    else {
        return value
    }
}

export const objectToQueryString = (obj: Record<string, any>): string => {
    const filteredObj = Object.fromEntries(
        Object.entries(obj).filter(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ([_, value]) =>
                value !== null &&
                value !== undefined &&
                value !== '' &&
                (!Array.isArray(value) || value.length > 0),
        ),
    )
    const params = new URLSearchParams(filteredObj)
    return params.toString()
}


export const polygonToWKT = (polygon: [number, number][]): string => {
    if (!polygon?.length) return "";

    const closedPolygon = [...polygon];
    const [firstLat, firstLng] = polygon[0];
    const [lastLat, lastLng] = polygon[polygon.length - 1];

    // اطمینان از بسته بودن پلی‌گان
    if (firstLat !== lastLat || firstLng !== lastLng) {
        closedPolygon.push([firstLat, firstLng]);
    }

    const coordinates = closedPolygon
        .map(([lat, lng]) => `${lng} ${lat}`) // ترتیب WKT: lng lat
        .join(", ");

    return `POLYGON ((${coordinates}))`;
};
export const downloadBase64FromApi = async (item: any, base64: string) => {
    const mimeType = `application/${item.extension.replace(".", "")}`;
    const byteCharacters = atob(base64);
    const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0)));
    const blob = new Blob([byteArray], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = item?.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export function formDataToObject(formData: FormData): Record<string, any> {
    const obj: Record<string, any> = {};
    formData.forEach((value, key) => {

        if (obj[key]) {
            if (Array.isArray(obj[key])) {
                obj[key].push(value);
            } else {
                obj[key] = [obj[key], value];
            }
        } else {
            obj[key] = value;
        }
    });
    return obj;
}

export function objectToFormData(obj: Record<string, any>): FormData {
    const formData = new FormData();

    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((value: any) => formData.append(key, value));
        } else {
            formData.append(key, obj[key]);
        }
    }

    return formData;
}

export function base64ToFile(base64String: string, fileName: string): File {
    const arr = base64String.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
}