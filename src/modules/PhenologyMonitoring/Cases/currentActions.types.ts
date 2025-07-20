export type FilterModalProp = {
    isOpen: boolean, setIsOpen: (value: boolean) => void
    setSearchParams: (value: any) => void
}
export type CardProp = {
    item: {
        reviewId: number,
        reviewStartDate: string,
        subjectId: number,
        policyId: number,
        agriYear: string,
        product: string,
        formId: number,
        region: string,
        beneficiary: {
            nationalCode: number,
            title: string,
            mobile: string
        },
        insured: number
    }
}