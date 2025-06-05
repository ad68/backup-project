import { Outlet } from "react-router-dom";
import Footer from '../Footer'
export default function Index() {
    return (
        <section>
            <Outlet />
            <Footer />
        </section>
    );
}
