import { Routes, Route } from "react-router";
import Homepage from "./components/Homepage/Homepage";
import Virtualization from "./components/Virtualization/Virtualization";
import AutocompleteSearchBar from "./components/AutocompleteSearchBar/AutocompleteSearchBar";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<Virtualization />} path="/virtualization" />
      <Route element={<AutocompleteSearchBar />} path="/searchbar" />
      <Route element={<ProgressBar />} path="/progressbar" />
    </Routes>
  );
}

export default App;
