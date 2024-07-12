import logo from "../assets/jk-logo.png";
import modeimg from "../assets/night-mode.png";
import menuimg from "../assets/menu.png";
import { useState } from "react";


export default function Header({ mode, setMode, menuTF, setMenuTF ,setScroll ,scroll }) {
  const [alti, setAlti] = useState(true);
  

  const toggleMode = () => {
    alti ? setMode("light") : setMode("dark");
    setAlti(!alti);    
  };

  return (
    <div className="d-flex align-items-center justify-content-between jk-header">
      <img className="col-3 col-md-1 jkimg2" src={logo} alt="" />

      <div className=" col-4 col-md-7 d-flex align-items-start justify-content-between justify-content-md-end">
        <img
          src={modeimg}
          className=" col-5 col-md-1 d-md-none jkimg"
          onClick={toggleMode}
        />

        <img
          src={menuimg}
          className="col-4 col-md-3   jkimg d-md-none"
          onClick={() => {
            setMenuTF(!menuTF);
            setScroll(!scroll)

          }}
        />

        <ul className="jk-ul list-unstyled d-none justify-content-evenly  align-items-center col-8  col-md-12 col-xl-8 d-md-flex  ">
          <img
            src={modeimg}
            className=" col-5 col-md-1  col-lg-1 jkimg"
            onClick={toggleMode}
          />
          <li>
            <a className="text-decoration-none" href="#">
              home
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#contact">
              contact
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#projects">
              projects
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#sec-3">
              skills
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
