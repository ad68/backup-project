import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type FilterState = {
    provinceId: string;
    countyId: string;
    districtId: string;
    ruralDistrictId: string;
    placeId: string;
    formReviewId: string;
    productId: string;
    nationalCode: string;
    policyId: string;
    subSectionId: string;
    keyword: string,
};

const initialState: FilterState = {
    provinceId: "",
    countyId: "",
    districtId: "",
    ruralDistrictId: "",
    placeId: "",
    formReviewId: "",
    productId: "",
    nationalCode: "",
    policyId: "",
    subSectionId: "1",
    keyword: "",
};

type SearchFilter = {
    filter: FilterState;
    updateFilter: (key: keyof FilterState, value: string) => void;
    setFilters: (values: Partial<FilterState>) => void;
    clearParams: () => void;
};

export const useLocationDeterminationStore = create<SearchFilter>()(
    devtools(

        (set) => ({
            filter: initialState,
            updateFilter: (key, value) =>
                set(
                    (state) => ({
                        filter: {
                            ...state.filter,
                            [key]: value,
                        },
                    }),
                    false,
                    'locationDetermination/updateFilter'
                ),
            setFilters: (values) =>
                set(
                    (state) => ({
                        filter: {
                            ...state.filter,
                            ...values,
                        },
                    }),
                    false,
                    'locationDetermination/setFilters'
                ),
            clearParams: () =>
                set(
                    { filter: initialState },
                    false,
                    'locationDetermination/clearParams'
                ),
        }),
        {
            name: 'location-determination-storage',
        }
        ,

    )
);
