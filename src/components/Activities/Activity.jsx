import { Suspense } from "react";
import { CircularProgress } from "@mui/material"; // Import MUI CircularProgress
import { ActivityHeroSection } from "./ActivityHeroSection";
import { ActivityFilter } from "./ActivityFilter";
import ActivityPage from "./ActivityPage";
import "../../Styles/Activity.css"
import { Activities } from "./Activities";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Activity() {
  return (
    <>
      <Navbar />
      <ActivityHeroSection />
      <div className="container">
        <h2 className="title">Explore Water Activities</h2>
        <div className="activities-grid">
          <ActivityFilter />
          <Suspense fallback={<ActivityLoading />}>
            <Activities />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ActivityLoading() {
  return (
    <div className="activity-loading">
      <CircularProgress /> {/* MUI CircularProgress spinner */}
      <p>Loading activities...</p> {/* Optional loading text */}
    </div>
  );
}
