import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Indexdb from '@/pages/indexdb'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {

    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indexdb" element={<Indexdb />} />
        <Route path="/home" element={<Login />} />
    </Routes>;
}
