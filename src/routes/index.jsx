import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import TourHomePage from "../pages/Home/TourHomePage";

import BaliPage from "../pages/Event/BaliPage";
import PadangPage from "../pages/Event/PadangPage";

import Login from "../pages/Runners/Login";
import Participant from "../pages/Runners/Participant";
import RPC from "../pages/Runners/RPC";
import Rules from "../pages/Runners/Rules";
import RunnerEntitlement from "../pages/Runners/RunnerEntitlement";
import Waiver from "../pages/Runners/Waiver";

import { bali2027 } from "../data/bali";
import { padang2027 } from "../data/padang";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<TourHomePage />}
                />

                <Route
                    path="/bali2027"
                    element={<BaliPage event={bali2027} />}
                />

                <Route
                    path="/padang2027"
                    element={<PadangPage event={padang2027} />}
                />

                {/* Runner */}

                <Route
                    path="/runner/login"
                    element={<Login />}
                />

                <Route
                    path="/runner/entitlement"
                    element={<RunnerEntitlement />}
                />

                <Route
                    path="/runner/rules"
                    element={<Rules />}
                />

                <Route
                    path="/runner/waiver"
                    element={<Waiver />}
                />

                <Route
                    path="/runner/rpc"
                    element={<RPC />}
                />

                <Route
                    path="/runner/participant"
                    element={<Participant />}
                />

            </Routes>

        </BrowserRouter>

    );

}