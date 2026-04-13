import './App.css'
import firmLogo from './assets/baglamukhi-user-logo.png'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <header className="top-bar">
          <div className="firm-name-block">
            <p className="firm-name-main">Baglamukhi Enterprises</p>
            <p className="firm-name-sub">Railway Contractor</p>
          </div>
          <a className="phone-chip" href="tel:7988358759">
            Call: 7988358759
          </a>
        </header>

        <div className="hero-layout">
          <div className="hero-content">
          <p className="eyebrow">
            Trusted Old Iron Scrap Trading | Railway Contractor
          </p>
            <h1>Powering Industry Through Responsible Scrap Commerce</h1>
            <p className="hero-copy">
              We specialize in old iron scrap trading with strong expertise in
              both ferrous and non-ferrous materials. Our focus is transparent
              dealing, fair pricing, and reliable pickup support for every
              client.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:7988358759">
                Contact Now
              </a>
              <a className="btn btn-secondary" href="#services">
                Explore Services
              </a>
            </div>
          </div>
          <div className="hero-visual-wrap">
            <img
              className="hero-visual"
              src={firmLogo}
              alt="Baglamukhi Enterprises official logo"
            />
            <div className="hero-visual-caption">
              <p>Old Iron Scrap Trading</p>
              <p>Ferrous and Non-Ferrous Materials</p>
              <p>Reliable Railway Contract Work</p>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <article className="stat-card float-slow">
            <h2>Ferrous Scrap</h2>
            <p>MS Scrap, Iron Sections, Heavy Melting Scrap</p>
          </article>
          <article className="stat-card float-fast">
            <h2>Non-Ferrous Scrap</h2>
            <p>Aluminum, Copper, Brass and allied valuable metals</p>
          </article>
          <article className="stat-card float-slow">
            <h2>Fast Support</h2>
            <p>Quick response for rate discussion and deal finalization</p>
          </article>
        </div>
      </section>

      <section id="services" className="content-section">
        <h2 className="section-title">What We Deal In</h2>
        <div className="service-grid">
          <article className="service-card">
            <h3>Old Iron Scrap Trading</h3>
            <p>
              Bulk procurement and sale of old iron scrap with quality-aware
              sorting and dependable logistics.
            </p>
          </article>
          <article className="service-card">
            <h3>Ferrous Materials</h3>
            <p>
              Complete handling of iron-based scrap categories for industrial
              buyers and metal processors.
            </p>
          </article>
          <article className="service-card">
            <h3>Non-Ferrous Materials</h3>
            <p>
              Premium handling of non-ferrous metals including copper, brass,
              and aluminum scrap.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section highlight-section">
        <h2 className="section-title">Why Baglamukhi Enterprises</h2>
        <div className="reason-grid">
          <p>Transparent and fair market-based pricing</p>
          <p>Professional communication and clear deal terms</p>
          <p>Committed to long-term, trust-driven business relations</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Ready to Deal in Scrap Material?</h2>
        <p>
          Connect with Baglamukhi Enterprises for old iron scrap, ferrous, and
          non-ferrous requirements.
        </p>
        <a className="btn btn-primary" href="tel:7988358759">
          7988358759
        </a>
      </section>

      <footer className="footer-note">
        <p>Baglamukhi Enterprises | Railway Contractor | Old Iron Scrap Trading</p>
      </footer>
    </main>
  )
}

export default App
