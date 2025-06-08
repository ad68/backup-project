import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import TechnicalAttachment from '@/pages/TechnicalAttachment'
import LocationDetermination from '@/pages/TechnicalAttachment/LocationDetermination'
import CheckSpecifications from '@/pages/TechnicalAttachment/CheckSpecifications'
import InsuranceDetail from '@/pages/InsuranceDetail'
import InsuranceAction from '@/pages/InsuranceAction'
import InsuranceLocation from '@/pages/InsuranceLocation'
import PrivateInfo from '@/pages/PrivateInfo'
import LandDivision from '@/pages/LandDivision'
import CheckSpecificationsTabs from '@/pages/TechnicalAttachment/CheckSpecificationsTabs'
import Pagination from '@/pages/Pagination'
/* import CirclePage from '@/pages/CirclePage'
import Indexdb from '@/pages/indexdb'
import ScreenShot from '@/pages/ScreenShot'
import Map from '@/pages/Map' */
import ProtectedRoute from './ProtectedRoute'
import MAIN_LAYOUT from '../components/layout/MainLayout'
import DashboardLayout from '../components/layout/DashboardLayout'
export default function Index() {
    const mainLayoutRoutes = [

        { path: "/check-specifications", element: <CheckSpecifications /> },
        { path: "/location-determination", element: <LocationDetermination /> },
        { path: "/insurance-detail", element: <InsuranceDetail /> },
        { path: "/insurance-action", element: <InsuranceAction /> },
        { path: "/insurance-location", element: <InsuranceLocation /> },
        { path: "/private-info", element: <PrivateInfo /> },
        { path: "/land-division", element: <LandDivision /> },
        { path: "/pagination", element: <Pagination /> },
        { path: "/check-specifications-tabs", element: <CheckSpecificationsTabs /> },


    ];
    const dashboardLayoutRoutes = [
        { path: "/home", element: <Home /> },
        { path: "/technical-attachment", element: <TechnicalAttachment /> },

    ];
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MAIN_LAYOUT />}>
            {mainLayoutRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute>{element}</ProtectedRoute>}
                />
            ))}
        </Route>
        <Route element={<DashboardLayout />}>
            {dashboardLayoutRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute>{element}</ProtectedRoute>}
                />
            ))}
        </Route>
        {/*  <Route path="/circle" element={<CirclePage />} />
        <Route path="/indexdb" element={<Indexdb />} />
        <Route path="/map" element={<Map />} />
        <Route path="/screenshot" element={<ScreenShot />} /> */}
    </Routes>
}
