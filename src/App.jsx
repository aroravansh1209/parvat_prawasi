import { Route, Routes } from "react-router-dom";  // Importing Routes and Route from react-router-dom
import Home from "./components/Home";  // Ensure correct default imports
import Packages from "./components/Packages/Packages";
import Activity from "./components/Activities/Activity";
import ActivityPage from "./components/Activities/ActivityPage";
import PackagePage from "./components/Packages/PackagesPage";
import VehicleRental from "./components/VechileRentals/VechileRental";
import CarRentalPage from "./components/VechileRentals/Car";
import ScootyRentalPage from "./components/VechileRentals/Scotty";
import StayDetailPage from "./components/Stays/StayDetail";
import Login from './components/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/stays" element={<Stays />} /> */}
      <Route path="/stays/:staysId" element={<StayDetailPage />} />
      <Route path="/rentals" element={<VehicleRental />} />
      <Route path="/rentals/car" element={<CarRentalPage />} />
      <Route path="/rentals/bike" element={<ScootyRentalPage />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:packagesId" element={<PackagePage />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/activity/:activityId" element={<ActivityPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
