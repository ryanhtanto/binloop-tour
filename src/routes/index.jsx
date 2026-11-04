import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import TourHomePage from "../pages/Home/TourHomePage";
// import EventPage from "../pages/Event/EventPage";
import { bali2027 } from "../data/bali";
import { padang2027 } from "../data/padang";
import Navbar from "../components/layout/Navbar";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <TourHomePage />
                    }
                />
                {/* <Route
                    path="/bali2027"
                    element={
                        <EventPage event={bali2027} />
                    }
                />
                <Route
                    path="/padang2027"
                    element={
                        <EventPage event={padang2027} />
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    );
}