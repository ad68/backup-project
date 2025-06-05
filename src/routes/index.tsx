import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import TechnicalAttachment from '@/pages/TechnicalAttachment'
import InsuranceDetail from '@/pages/InsuranceDetail'
import InsuranceAction from '@/pages/InsuranceAction'
import InsuranceLocation from '@/pages/InsuranceLocation'
import PrivateInfo from '@/pages/PrivateInfo'
import LandDivision from '@/pages/LandDivision'
import Pagination from '@/pages/Pagination'
/* import CirclePage from '@/pages/CirclePage'
import Indexdb from '@/pages/indexdb'
import ScreenShot from '@/pages/ScreenShot'
import Map from '@/pages/Map' */
import ProtectedRoute from './ProtectedRoute'
import MAIN_LAYOUT from '../components/layout/MainLayout'

export default function Index() {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MAIN_LAYOUT />}>
            <Route path="/home" element={<ProtectedRoute>
                <Home />
            </ProtectedRoute>} />
            <Route path="/technical-attachment" element={<ProtectedRoute><TechnicalAttachment /></ProtectedRoute>} />
            <Route path="/insurance-detail" element={<ProtectedRoute><InsuranceDetail /></ProtectedRoute>} />
            <Route path="/insurance-action" element={<ProtectedRoute><InsuranceAction /></ProtectedRoute>} />
            <Route path="/insurance-location" element={<ProtectedRoute><InsuranceLocation /></ProtectedRoute>} />
            <Route path="/private-info" element={<ProtectedRoute><PrivateInfo /></ProtectedRoute>} />
            <Route path="/land-division" element={<ProtectedRoute><LandDivision /></ProtectedRoute>} />
            <Route path="/pagination" element={<ProtectedRoute><Pagination /></ProtectedRoute>} />
        </Route>
        {/*  <Route path="/circle" element={<CirclePage />} />
        <Route path="/indexdb" element={<Indexdb />} />
        <Route path="/map" element={<Map />} />
        <Route path="/screenshot" element={<ScreenShot />} /> */}
    </Routes>
}
