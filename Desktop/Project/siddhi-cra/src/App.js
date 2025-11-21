import React from "react";
import "./App.css";
import { AiFillHome, AiOutlineProfile } from "react-icons/ai";
import {
  MdOutlineReportGmailerrorred,
  MdAppShortcut,
  MdContacts,
} from "react-icons/md";
import { RiBillLine } from "react-icons/ri";

const bg = process.env.PUBLIC_URL + "/background.png";
const preview = process.env.PUBLIC_URL + "/preview.png";
const logo = process.env.PUBLIC_URL + "/image.png";

function App() {
  return (
    <div className="app-root">
      <div className="container">
        <header className="top-header">
          <div className="brand">Siddhi</div>
          <div className="search">
            <input placeholder="Search anything" />
          </div>
          <div className="notif">🔔</div>
        </header>

        <div className="body">
          <aside className="left-nav">
            <div className="nav-icon">
              <AiFillHome size={26} />
              <div className="nav-text">Home</div>
            </div>

            <div className="nav-icon">
              <MdOutlineReportGmailerrorred size={26} />
              <div className="nav-text">Reports</div>
            </div>

            <div className="nav-icon">
              <MdAppShortcut size={26} />
              <div className="nav-text">My Apps</div>
            </div>

            <div className="nav-icon">
              <MdContacts size={26} />
              <div className="nav-text">Leads</div>
            </div>

            <div className="nav-icon">
              <AiOutlineProfile size={26} />
              <div className="nav-text">Profile</div>
            </div>

            <div className="nav-icon">
              <RiBillLine size={26} />
              <div className="nav-text">GST</div>
            </div>
          </aside>

          <main className="main-area">
            <section
              className="hero"
              style={{
                backgroundImage: `linear-gradient(rgba(8,25,51,0.55), rgba(8,25,51,0.55)), url(${bg})`,
              }}
            >
              <div className="hero-inner">
                <h2 className="hero-title">AIM FOR SUCCESS</h2>
                <p className="hero-sub">
                  Grow professionally as a Tata AIA Life Insurance Advisor &amp;
                  always be #HarVaqtKeLiyeTaiyaar
                </p>

                {/* Form card centered on hero */}
                <div className="form-card">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>

                  <div className="form-title">
                    <strong>Please fill in your details</strong>
                  </div>

                  <form
                    className="fields new-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="input-grid">
                      <div className="input-group">
                        <input
                          id="name"
                          name="name"
                          defaultValue="Sumit Rao"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="name">Full name</label>
                      </div>

                      <div className="input-group">
                        <select
                          id="gender"
                          name="gender"
                          defaultValue="Male"
                          data-has="true"
                          required
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <label className="float-label">Gender</label>
                      </div>

                      <div className="input-group">
                        <input
                          id="dob"
                          name="dob"
                          type="date"
                          defaultValue="1993-11-24"
                          placeholder=" "
                        />
                        <label className="float-label">Date of birth</label>
                      </div>

                      <div className="input-group phone-group">
                        <div className="country-pill">🇮🇳 +91</div>
                        <input
                          id="phone"
                          name="phone"
                          defaultValue="9828796712"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="phone">Mobile number</label>
                      </div>
                    </div>
                  </form>
                </div>

                {/* right portrait */}
                <div className="hero-right">
                  <img src={preview} alt="person" />
                </div>
              </div>
            </section>
            {/* -------------------
                Continue overlapping
                (moved OUTSIDE .hero)
                ------------------- */}
            {/* /* temporary test — inline style */ }
            <div
              className="continue-wrap overlap"
              style={{ margin: "-110px auto 36px" }}
            >
              <button className="btn-continue overlap-btn">Continue</button>
            </div>
            <footer className="footer">
              Tata AIA Life Insurance © 2023. All Right Reserved.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
