import { Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import Docs from "./routes/docs";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Root/>}/>
            <Route path="docs" element={<Docs/>}/>
        </Routes>
    )
}