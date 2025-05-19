import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {

    return <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
    </Routes>;
}
