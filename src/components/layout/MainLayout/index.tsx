import { Outlet } from "react-router-dom";
import Footer from '../Footer'
export default function Index() {
    return (
        <section className="pb-[53px]">
            <Outlet />
            <Footer />
        </section>
    );
}
