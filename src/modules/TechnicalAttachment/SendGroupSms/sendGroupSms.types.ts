export type FilterModalProp = {
    isOpen: boolean, setIsOpen: (value: boolean) => void
    getList: () => void
    setSearchParams?: (value: any) => void
    clearFilter: () => void
    filter: any
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
    showSmsModal: (value: any) => void

}
export type SendGroupSmsFilter = {
    provinceId: string;
    countyId: string;
    districtId: string;
    ruralDistrictId: string;
    placeId: string;

};
export type PaginationProp = {
    setCurrentPage: (value: number) => void,
    totalPage: number,
    currentPage: number
}