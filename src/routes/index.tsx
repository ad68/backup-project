import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import TechnicalAttachment from '@/pages/TechnicalAttachment'
import InsuranceDetail from '@/pages/InsuranceDetail'
import InsuranceAction from '@/pages/InsuranceAction'
import InsuranceLocation from '@/pages/InsuranceLocation'
import PrivateInfo from '@/pages/PrivateInfo'
import LandDivision from '@/pages/LandDivision'
/* import CirclePage from '@/pages/CirclePage'
import Indexdb from '@/pages/indexdb'
import ScreenShot from '@/pages/ScreenShot'
import Map from '@/pages/Map' */
import ProtectedRoute from './ProtectedRoute'
export default function Index() {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/technical-attachment" element={<TechnicalAttachment />} />
            <Route path="/insurance-detail" element={<InsuranceDetail />} />
            <Route path="/insurance-action" element={<InsuranceAction />} />
            <Route path="/insurance-location" element={<InsuranceLocation />} />
            <Route path="/private-info" element={<PrivateInfo />} />
            <Route path="/land-division" element={<LandDivision />} />
        </Route>
        {/*  <Route path="/circle" element={<CirclePage />} />
        <Route path="/indexdb" element={<Indexdb />} />
        <Route path="/map" element={<Map />} />
        <Route path="/screenshot" element={<ScreenShot />} /> */}
    </Routes>
}
