import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import TourHomePage from "../pages/Home/TourHomePage";
import { bali2027 } from "../data/bali";
import { padang2027 } from "../data/padang";
import Navbar from "../components/layout/Navbar";
import BaliPage from "../pages/Event/BaliPage";
import PadangPage from "../pages/Event/PadangPage";

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
                <Route
                    path="/bali2027"
                    element={
                        <BaliPage event={bali2027} />
                    }
                />
                <Route
                    path="/padang2027"
                    element={
                        <PadangPage event={padang2027} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}