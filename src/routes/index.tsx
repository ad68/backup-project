import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Map from '@/pages/Map'
import Login from '@/pages/Login'
import Indexdb from '@/pages/indexdb'
import ScreenShot from '@/pages/ScreenShot'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {

    return <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/indexdb" element={<Indexdb />} />
        <Route path="/map" element={<Map />} />
        <Route path="/screenshot" element={<ScreenShot />} />
        <Route path="/" element={<Login />} />
    </Routes>;
}
