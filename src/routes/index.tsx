import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {

    return <Routes>
        <Route path="/" element={<Home />} />
    </Routes>;
}
