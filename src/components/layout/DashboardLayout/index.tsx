import { Outlet } from "react-router-dom";
import Footer from '../Footer'
export default function Index() {
    return (
        <section className="h-auto w-[440px] pb-[70px] m-auto max-w-full">
            <Outlet />
            <Footer />
        </section>
    );
}
