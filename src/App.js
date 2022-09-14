import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    const [sideMenuDisplay, setSideMenuDisplay] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home
                            sideMenuDisplay={sideMenuDisplay}
                            setSideMenuDisplay={setSideMenuDisplay}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
