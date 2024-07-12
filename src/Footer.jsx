import whats from "./assets/whatsapp.png";
import github from "./assets/github.png";
import linkd from "./assets/linkedin-logo.png";
import insta from "./assets/instagram.png";

export default function Footer() {
  return (
    <>
      <div className=" d-flex flex-column flex-lg-row align-items-center align-items-sm-start justify-content-start justify-content-lg-between align-items-md-center">
        <div className="col-10 col-lg-4 col-md-6 my-0">
          <p className=" display-5">Hi , Jaikumar</p>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="col-10 col-lg-3 col-md-6 d-flex flex-column mt-lg-3">
          <a
            target="_blank"
            className=" text-decoration-none jk-font-clr"
            href="mailto:jaikumartjay@gmail.com"
          >
            &#9701; jaikumartjay@gmail.com
          </a>
          <a
            target="_blank"
            className=" text-decoration-none jk-font-clr mt-1"
            href="https://github.com/tjay1505"
          >
            &#9701; My GitHub Repo
          </a>
          <a
            target="_blank"
            className=" text-decoration-none jk-font-clr mt-1"
            href="https://www.linkedin.com/in/jai-kumar-twyzx98765/"
          >
            &#9701; Linkedin
          </a>
        </div>
        <div className="col-10 col-lg-3 col-md-6 col-md-5 d-flex align-items-center flex-wrap justify-content-between my-4">
          <p className=" display-5 col-12">Social</p>
          <a
            target="_blank"
            className="col-2"
            href="https://wa.me/message/BSLWZB33MTOOK1"
          >
            <img src={whats} className="col-12 jkimg" alt="" />
          </a>
          <a
            target="_blank"
            className="col-2"
            href="https://wa.me/message/BSLWZB33MTOOK1"
          >
            <img src={github} className="col-12 jkimg" alt="" />
          </a>
          <a
            target="_blank"
            className="col-2"
            href="https://wa.me/message/BSLWZB33MTOOK1"
          >
            <img src={insta} className="col-12 jkimg" alt="" />
          </a>
          <a
            target="_blank"
            className="col-2"
            href="https://wa.me/message/BSLWZB33MTOOK1"
          >
            <img src={linkd} className="col-12 jkimg" alt="" />
          </a>
        </div>
      </div>
      <div className="col-12 py-4 d-flex flex-column align-items-center">
        <div className="border border-secondary col-11"></div>
        <div className="col-12 text-center mt-3 my-md-5">
            Copyrights @ Jaikumar (Tjay) | 2024
        </div>
      </div>

    </>
  );
}
