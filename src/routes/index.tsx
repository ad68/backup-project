import { Route, Routes } from "react-router-dom";
import Home from '@/Modules/Home'
import Login from '@/Modules/Login'
import TechnicalAttachment from '@/Modules/TechnicalAttachment'
import LocationDetermination from '@/Modules/TechnicalAttachment/LocationDetermination'
import CheckSpecifications from '@/Modules/TechnicalAttachment/CheckSpecifications'
import InsuranceDetail from '@/Modules/InsuranceDetail'
import InsuranceAction from '@/Modules/InsuranceAction'
import InsuranceLocation from '@/Modules/InsuranceLocation'
import PrivateInfo from '@/Modules/PrivateInfo'
import LandDivision from '@/Modules/LandDivision'
import CheckSpecificationsTabs from '@/Modules/TechnicalAttachment/CheckSpecificationsTabs'
import Pagination from '@/Modules/Pagination'
import Damage from '@/Modules/Damage/Home'
import DamageRegistration from '@/Modules/Damage/DamageRegistration'
import CurrentActions from '@/Modules/Damage/CurrentActions'
import PreviousActions from '@/Modules/Damage/Search'
import Search from '@/Modules/Damage/Search'
import PhenologyMonitoring from '@/Modules/PhenologyMonitoring/Home'
import PhenologyMonitoringCases from '@/Modules/PhenologyMonitoring/Cases'
import PhenologyMonitoringProgram from '@/Modules/PhenologyMonitoring/Program'
import PhenologyMonitoringEmergencyVisit from '@/Modules/PhenologyMonitoring/EmergencyVisit'
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

    </Routes>
}
