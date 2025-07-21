import { Outlet } from "react-router-dom";
import Footer from '../Footer'
export default function Index() {
    return (
        <section className="h-auto w-full max-w-7xl pb-[70px] m-auto">
            <Outlet />
            <Footer />
        </section>
    );
}
