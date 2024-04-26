import EmbedPageExample from "../pages/EmbedPageExample";
import EmbedPageWithID from "../pages/EmbedPageExample/EmbedPageWithID";
import Home from "../pages/Home";
import HomeEn from "../pages/HomeEn";
import HomeJp from "../pages/HomeJp";
import HomeSimple from "../pages/HomeSimple";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login"
import PageNotFound from "../pages/PageNotFound";
import Company from "../pages/Company";
import ContactUs from "../pages/ContactUs";
import Signup from "../pages/Signup";
// import { useAuthState } from "../hook/auth";
export default function Router() {
    // const auth = useAuthState()
    return (
        <Routes>
                {/* <Route element={<NavBar user={auth.user} />}> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/en" element={<HomeEn />} />
                    <Route path="/jp" element={<HomeJp />} />
                    <Route path="/simple" element={<HomeSimple />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/*" element={<PageNotFound />} />
                    {/* <Route path="/embed_page_example" element={<EmbedPageExample />}>
                        <Route path=":id" element={<EmbedPageWithID />} />
                    </Route>
                    <Route path="/contact_us" element={<ContactUs />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Route> */}
        </Routes>
    )
}