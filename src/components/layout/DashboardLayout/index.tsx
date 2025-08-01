import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Footer'
export default function Index() {
    const location = useLocation();

    const pathname = location.pathname;
    return (

        <section className={`h-full w-full max-w-7xl ${!pathname.startsWith("/technical-attachment/location-on-map") && `pb-[70px]`} m-auto`}>
            <Outlet />
            {!pathname.startsWith("/technical-attachment/location-on-map") && <Footer />}

        </section>
    );
}
