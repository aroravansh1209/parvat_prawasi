import '../../Styles/StayNewsletter.css'

export default function Newsletter() {
    return (
      <div className="StawNewsletter">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">Get Exclusive Offers</h2>
            <p className="subheading">
              Subscribe to our newsletter and receive special deals and updates
            </p>
            <form className="form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                />
                <button
                  type="submit"
                  className="subscribe-button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  