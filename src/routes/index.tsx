import { Route, Routes, useLocation } from "react-router-dom";
import Home from '@/modules/Home'
import Login from '@/modules/Login'
import TechnicalAttachment from '@/modules/TechnicalAttachment'
import LocationDetermination from '@/modules/TechnicalAttachment/LocationDetermination'
import CheckSpecifications from '@/modules/TechnicalAttachment/CheckSpecifications'
import InsuranceDetail from '@/modules/InsuranceDetail'
import InsuranceAction from '@/modules/InsuranceAction'
import InsuranceLocation from '@/modules/InsuranceLocation'
import PrivateInfo from '@/modules/PrivateInfo'
import LandDivision from '@/modules/LandDivision'
import CheckSpecificationsTabs from '@/modules/TechnicalAttachment/CheckSpecificationsTabs'
import ScreenShot from '@/modules/ScreenShot'
import Webcam from '@/modules/Webcam'
import Pagination from '@/modules/Pagination'
import Damage from '@/modules/Damage/Home'
import DamageRegistration from '@/modules/Damage/DamageRegistration'
import CurrentActions from '@/modules/Damage/CurrentActions'
import MapCash from '@/modules/MapCash'
import PreviousActions from '@/modules/Damage/Search'
import Search from '@/modules/Damage/Search'
import PhenologyMonitoring from '@/modules/PhenologyMonitoring/Home'
import PhenologyMonitoringCases from '@/modules/PhenologyMonitoring/Cases'
import PhenologyMonitoringProgram from '@/modules/PhenologyMonitoring/Program'
import PhenologyMonitoringEmergencyVisit from '@/modules/PhenologyMonitoring/EmergencyVisit'
import Profile from '@/modules/Profile'
import ProtectedRoute from './ProtectedRoute'
import MAIN_LAYOUT from '../components/layout/MainLayout'
import DashboardLayout from '../components/layout/DashboardLayout'
import Rules from '@/modules/rules'
import { useEffect } from "react";
export default function Index() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);
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
        { path: "/profile", element: <Profile /> },
        { path: "/Rules", element: <Rules /> },
    ];
    const DamageRoutes = [
        { path: "home", element: <Damage /> },
        { path: "damage-registration", element: <DamageRegistration /> },
        { path: "current-actions", element: <CurrentActions /> },
        { path: "previous-actions", element: <PreviousActions /> },
        { path: "search", element: <Search /> },
    ];
    const PhenologyMonitoringRoutes = [
        { path: "home", element: <PhenologyMonitoring /> },
        { path: "cases", element: <PhenologyMonitoringCases /> },
        { path: "program", element: <PhenologyMonitoringProgram /> },
        { path: "emergency-visit", element: <PhenologyMonitoringEmergencyVisit /> },
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
        <Route path="damage" element={<DashboardLayout />}>
            {DamageRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute>{element}</ProtectedRoute>}
                />
            ))}
        </Route>

        <Route path="phenology-monitoring" element={<DashboardLayout />}>
            {PhenologyMonitoringRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute>{element}</ProtectedRoute>}
                />
            ))}
        </Route>
        <Route path="screen-shot" element={<ScreenShot />} />
        <Route path="webcam" element={<Webcam />} />
        <Route path="map-cash" element={<MapCash />} />

    </Routes>
}
