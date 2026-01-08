
import Crops from './components/Forms/Crops'
import FruitCrops from './components/Forms/FruitCrops'
import useLandDivision from './landDivision.biz'
import { hasKeyInObj } from '@/utils/global'
export default function Index() {
    const { rowExtraInfoObj } = useLandDivision()

    return <>
        {hasKeyInObj(rowExtraInfoObj, "F126") && <FruitCrops />}
        {hasKeyInObj(rowExtraInfoObj, "F96") && <FruitCrops />}
    </>
}
