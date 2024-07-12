import upwork from "./assets/upwork.png";
import flan from "./assets/Freelancer.png";
import fiver from "./assets/fiverr.png";
import vs from './assets/working.png'
export default function Experience() {
  return (
    <>
      <p className="col-12 text-center text-primary display-5 mt-5">MY WORKS &rarr;</p>
      <p className="col-12 text-center">Freelancing</p>
      <div className=" col-12 d-flex flex-column flex-md-row align-items-center justify-content-center ">
        <img className="col-12 col-md-6 " src={vs} alt="" />
      <div className="col-12  col-md-5 d-flex flex-column align-items-center justify-content-evenly gap-xl-4 ">
        <a
          className="col-12 col-xl-9 text-decoration-none jk-font-clr jk-work-exp-a mb-3"
          target="_blank"
          href="https://www.freelancer.com/u/jaikumartjay1?sb=t"
        >
          <div className="col-12 border d-flex align-items-center justify-content-evenly rounded-3 border-1 p-2 ">
            <div className="col-8">
              <p className=" display-6 text-decoration-underline  link-offset-2 link-underline-opacity-25">Freelancer</p>
              <p>
                done freelancing in this platform and did soo many out-source
                project like college project
              </p>
              <p className=" rounded-3 text-center border border-1 bg-primary border-primary col-12 col-12 py-xxl-3" >visit my profile</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-between ">
              <img src={flan} className="col-10 jkimg " alt="" />
              <p>upwork</p>
            </div>
          </div>
        </a>
        <a
          className="col-12 col-xl-9 text-decoration-none jk-font-clr jk-work-exp-a mt-3 mt-md-0 mb-3"
          href="https://www.fiverr.com/jay_kumar_g/create-websites-react-developer-frontend-developer?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=y8v17l"
          target="_blank"
        >
          <div className="col-12 border d-flex align-items-center justify-content-evenly rounded-3 border-1 p-2">
            <div className="col-8">
              <p className=" display-6 text-decoration-underline  link-offset-2 link-underline-opacity-25">Fivver</p>
              <p>
                done freelancing in this platform and did soo many out-source
                project like college project
              </p>
              <p className="rounded-3 text-center border border-1 bg-primary border-primary col-12 col-12 py-xxl-3" >visit my profile</p>
            </div>
            <div className="col-4 d-flex  h-100 flex-column align-items-center justify-content-evenly">
              <img src={fiver} className="col-10  jkimg" alt="" />
              <p className="  mt-2">Fivver</p>
            </div>
          </div>
        </a>
        <a
          className="col-12 col-xl-9 text-decoration-none jk-font-clr mt-3 mt-md-0 jk-work-exp-a"
          href="https://www.upwork.com/freelancers/~018003821ea5de9168"
          target="_blank"
        >
          <div className="col-12  border d-flex align-items-center justify-content-evenly rounded-3 border-1 p-2">
            <div className="col-8">
              <p className=" display-6 text-decoration-underline  link-offset-2 link-underline-opacity-25">Upwork </p>
              <p>
                done freelancing in this platform and did soo many out-source
                project like college project
              </p>
              <p className="rounded-3 text-center border border-1 bg-primary border-primary col-12 py-xxl-3" >visit my profile</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-between">
              <img src={upwork} className="col-12 jkimg" alt="" />
              <p className="">upwork</p>
            </div>
          </div>
        </a>
        
      </div>
      </div>
    </>
  );
}
