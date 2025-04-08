import '../../Styles/ActivityHeroSection.css'

export function ActivityHeroSection() {
    return (
      <div className="ActivityHero-container">
        <div className="ActivityHero-overlay">
          <img
            src="/placeholder.svg?height=400&width=1600"
            alt="Water activities"
            className="ActivityHero-image"
          />
        </div>
        <div className="ActivityHero-content">
          <h1 className="ActivityHero-title">Discover Exciting Water Activities</h1>
          <p className="ActivityHero-description">
            Dive into adventure with our curated selection of water sports and activities. From scuba diving to parasailing, we've got something for everyone.
          </p>
          <button className="ActivityHero-button">
            Explore Activities
          </button>
        </div>
      </div>
    );
  }
  