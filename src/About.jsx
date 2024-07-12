import illu from "./assets/illu.png";

export default function About() {
  return (
    <>
      <div id="about" className="row d-flex flex-column flex-md-row align-items-center justify-content-start my-3">
        <img src={illu} className="col-12 col-md-6" alt="" />
        <div className="col-12 col-md-6">
          <div className="col-12 d-flex align-items-center justify-content-start">
            <p className=" display-4 me-3">WebApp</p>
            <p className="col-3 border border-2" id="jk-about-star">
              <span id="jk-about-starin">&#9632;</span>
            </p>
          </div>
          <p className="col-12 col-md-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea atque onsectetur adipisicing elit. Ea atque
            non deserunt solu
            non deserunt soluta, nam quae laborum?
          </p>
          <div className="col-12 d-flex align-items-center justify-content-start">
            <p className=" display-4 me-3">Responsive</p>
            <p className="col-3 border border-2" id="jk-about-star">
              <span id="jk-about-starin">&#9632;</span>
            </p>
          </div>
          <p className="col-12 col-md-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea atque
            non deserunt soluta, nam quae laborum?
            sum dolor, sit amet consectetur adipisicing elit. Ea atque
            non deserunt soluta, nam quae laborum?
          </p>
          <div className="col-12 d-flex align-items-center justify-content-start">
            <p className=" display-4 me-3">lib-Tools</p>
            <p className="col-3 border border-2" id="jk-about-star">
              <span id="jk-about-starin">&#9632;</span>
            </p>
          </div>
          <p className="col-12 col-md-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea atque
            onsectetur adipisicing elit. Ea atque
            non deserunt soluta, nam quae laborum?
            non deserunt soluta, nam quae laborum?
          </p>
        </div>
      </div>
    </>
  );
}
