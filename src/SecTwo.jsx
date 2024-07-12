import html from "./assets/html.png";
import rct from "./assets/react.svg";
import css from "./assets/css-3.png";
import js from "./assets/js.png";
import sass from "./assets/sass.png";
import git from "./assets/code.png";
import boot from './assets/bootstrap.png'

export default function SecTwo() {
  return (
    <>
      <h1 id="sec-3" className="display-5 text-center my-5 text-primary ">
        skills &rarr;
      </h1>
      <div className="row vh-auto d-flex flex-column flex-md-row align-items-center justify-content-evenly jk-skill gap-1">
        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-4 mt-md-0 rounded-3 py-2 ">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={html} className="col-12 " alt="" />
            <p className="  ">Html</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p className="col-12" >
              skilled in developing responive an stunnig rpoject using z
            </p>

            <div class="progress progress-striped active">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:'95%'}}
              >
              </div>
            </div>
          </div>
        </div>

        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-5 mt-md-0 py-2 rounded-3">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={css} className="col-12 " alt="" />
            <p className="  ">css</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p>skilled in developing responive an stunnig rpoject using z</p>
            <div className="progress">
              <div className=" progress-bar" style={{width:'95%'}} role="progressbar"></div>
            </div>
          </div>
        </div>

        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-5 mt-md-0 py-2 rounded-3">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={js} className="col-12 " alt="" />
            <p className="  ">js</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p>skilled in developing responive an stunnig rpoject using z</p>
            <div className="progress">
              <div className=" progress-bar " role="progressbar" style={{width:'90%'}}></div>
            </div>
          </div>
        </div>

        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-5 py-2 rounded-3 ">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={sass} className="col-12 " alt="" />
            <p className="  ">sass</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p>skilled in developing responive an stunnig rpoject using z</p>
            <div className="progress">
              <div className=" progress-bar" style={{width:'80%'}} role="progressbar"></div>
            </div>
          </div>
        </div>

        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-5 py-2 rounded-3 ">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={boot} className="col-12 " alt="" />
            <p className="  ">BS</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p>skilled in developing responive an stunnig rpoject using z</p>
            <div className="progress">
              <div className=" progress-bar" style={{width:'80%'}} role="progressbar"></div>
            </div>
          </div>
        </div>

        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-5 py-2 rounded-3">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={rct} className="col-12 " alt="" />
            <p className="  ">react</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p>skilled in developing responive an stunnig rpoject using z</p>
            <div className="progress">
              <div className=" progress-bar w-75" role="progressbar"></div>
            </div>
          </div>
        </div>

        <div className="border col-11 col-md-5 col-xl-3 h-25 d-flex align-items-center justify-content-between mt-5 py-2 rounded-3">
          <div className="logo col-3 d-flex flex-column-reverse align-items-center h-75">
            <img src={git} className="col-12 " alt="" />
            <p className="  ">git</p>
          </div>
          <div className="sk-para col-8  h-75">
            <p>skilled in developing responive an stunnig rpoject using z</p>
            <div className="progress">
              <div className=" progress-bar w-75" role="progressbar"></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-9 mt-5 h-75 rounded-3">
          <p className="  ">currently Updating & learning skills</p>
          <p>
            node js, Gsap ,postgerSQL ,Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consequuntur, repudiandae ipsum consectetur magni
            inventore quam vel cum optio! Aperiam, iste!
          </p>
        </div>
      </div>
    </>
  );
}
