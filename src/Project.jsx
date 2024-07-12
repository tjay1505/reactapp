import { useState } from "react";
import { ProData } from "./projectData";
import ops from './compo/ProDataAsset/oops.png'
export default function Project() {
  const [fil, setFil] = useState("");
  const [pdata, setPdata] = useState(ProData);

  const handleForm = (s) => {
    s.preventDefault();
    const filterBySearch = pdata.filter((item) => {
      if (item.s.toLowerCase().includes(fil.toLowerCase())) {
        return item;
      }
    });
    setPdata(filterBySearch);
    if (filterBySearch.length == 0) {
      setPdata(ProData);
      setPdata([{img:ops,tittle:'NOT FOUND',para:'search related keywords like landing pages, Api, JS, html, css etc,.'}])
    }
    
  };

  return (
    <>
      <p className=" display-5 my-4 mt-5 col-12 text-center text-primary" id="projects" >
        PROJECTS &rarr;
      </p>
      <form className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center ">
        <input
          type="text"
          className="col-11 col-md-4 rounded-5 border-1 border-secondary ps-3 jk-pro-input"
          placeholder="search here..."
          value={fil}
          onFocus={() => setPdata(ProData)}
          onChange={(e) => setFil(e.target.value)}
          required
        />
        <button
          className="text-white py-xl-2 bg-primary rounded-1 col-11 mt-3 mt-md-0 ms-md-3 col-md-2 col-xl-1 "
          type="submit"
          onClick={(e) => handleForm(e)}
        >
          search
        </button>
      </form>
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-12 col-xl-8 col-xxl-9 gap-xl-5  vh-auto d-flex flex-wrap gap-4 flex-row mt-5 flex-md-row align-items-center justify-content-evenly">
        {pdata.map((w) => {
          return (
            <div
              className="col-12 col-md-5 col-lg-4 col-xxl-3  border border-2 rounded-4 d-flex flex-column align-items-center justify-content-around jk-pro py-3"
              key={w.tittle}
            >
              <img className="rounded-2 col-11" src={w.img} alt="" />
              <p className="col-11 text-primary">{w.tittle}</p>
              <p className="col-11 jk-pro-p">{w.para}</p>
              <a
                className="rounded-2 py-1 text-center text-decoration-none bg-primary col-11 jk-font-clr border border-1"
                target="_blank"
                href={w.links}
              >
                Live page
              </a>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
