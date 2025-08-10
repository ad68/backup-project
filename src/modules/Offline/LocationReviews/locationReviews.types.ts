

type LocateReview = {
    id: number;
    reviewId: number;
    reviewStartDate: string;
    subjectId: number;
    policyId: number;
    agriYear: string;
    product: string;
    formId: number;
    region: string;
    beneficiary: Beneficiary;
    insured: number;
    policyList: Policy[];
};

type Beneficiary = {
    nationalCode: string;
    title: string;
    mobile: string;
};

type Policy = {
    id: number;
    planId: number;
    subjectId: number;
    branch: Branch;
    placeModel: PlaceModel;
    policyItemList: PolicyItem[];
};

type Branch = {
    id: number;
    code: string;
    title: string;
};

type PlaceModel = {
    title: string;
    latitude: number;
    longitude: number;
};

type PolicyItem = {
    policyItemId: number;
    subjectItemId: number;
    property01: string | null;
    property02: string | null;
    property03: string | null;
    property04: string | null;
    tag: string | null;
    rawExtraInfo: string;
    extraInfo: string;
    insured: number;
    actual: number | null;
    note: string;
    featureId: number | null;
};

export type OfflineReview = {
    id: number;
    username: string | null;
    locateReviews: LocateReview[];
    caseStatus: string;
    visible: boolean;
    createdBy: string | null;
    createdOn: string;
    modifiedBy: string | null;
    modifiedOn: string | null;
    enable: boolean;
    regDate: number;
};