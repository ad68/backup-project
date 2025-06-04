export type ModalProp = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}
export type PolicyItem = {
    policyItemId: number,
    subjectItemId: number,
    featureId: number,
    property01: string,
    property02: string,
    property03: string,
    property04: string,
    extraInfo: string,
    insured: number,
    note: string,
}