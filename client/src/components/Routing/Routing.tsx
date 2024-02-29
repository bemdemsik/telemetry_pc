import {Route, Routes} from "react-router-dom";
import Slider from "../Slider/Slider";

export default function Routing() {
    return (
        <Routes>
            <Route path="/test" element={<Slider />}/>
            <Route path="/main" element={<Slider />}/>
            <Route path="/test" element={<Slider />}/>
            <Route path="/test" element={<Slider />}/>
        </Routes>
    )
}