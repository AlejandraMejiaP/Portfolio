import Navbar from "../NavBar";

function Landing() {
  return (
    <section className="start" id="landing">
      <div className="div__principal">
        <h1 className="start__title">Alejandra Mejía Pérez</h1>
        <h2 className="start__subtitle">Web Developer</h2>
        <div className="flip-container">
          <div className="card">
            <div className="start__img--principal front" alt="Curriculum"></div>
            <div className="back">
              <a
                href="https://drive.google.com/file/d/1NaoE0P3GCKwHAUcFZADUCZhMTtWEVc-W/view?usp=sharing"
                alt="Descargar CV"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-solid fa-file-arrow-down"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1NaoE0P3GCKwHAUcFZADUCZhMTtWEVc-W/view?usp=sharing"
                alt="Descargar CV"
                rel="noreferrer"
                target="_blank"
              >
                <span className="back_text">Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mouse-efect">
          <i className="fa-solid fa-arrow-pointer"></i>
        </div>
      </div>
      <Navbar />
    </section>
  );
}

export default Landing;
