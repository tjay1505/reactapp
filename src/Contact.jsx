export default function Contact() {

  return (
    <>
      <div id="contact" className="row vh-100 d-flex flex-column align-items-center mt-5">
        <p className="col-12 text-center display-5 text-primary">CONTACT &rarr;</p>
        <p className="col-12 text-center my-4" >Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <form action="" className="col-12 col-md-10 col-xl-8 d-flex flex-column align-items-center justify-content-evenly h-50 my-2 " >
            <label htmlFor="name" className=" d-flex flex-column col-11 col-md-6 h-25" >Name
            <input type="text" className=" bg-body-secondary border-0 h-50 ps-2 mt-1 rounded-1" id="name" required placeholder="Enter your Name" />
            </label>
           
            <label htmlFor="mail" className=" d-flex flex-column col-11 col-md-6 h-25 " >E-mail
            <input type="text" className=" bg-body-secondary border-0 h-50 ps-2 mt-1 rounded-1" id="mail" required placeholder="Enter your Email" />
            </label>
            <label htmlFor="feed" className=" d-flex flex-column col-11 col-md-6 h-50 ">
                Feedback
            <textarea className=" bg-body-secondary border-0 h-100 ps-2 mt-1 rounded-1 pt-2" placeholder="feebback" id=""></textarea>
            </label>
            <button className="rounded-3 text-center border border-1 border-primary py-2 bg-primary mt-3 mt-xl-5 col-4 col-md-2" >submit</button>
        </form>
      </div>
    </>
  );
}
