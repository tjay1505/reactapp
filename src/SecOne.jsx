import blob from "./assets/blob.svg";
import blob2 from "./assets/blob-2.svg";
import blob3 from "./assets/blob-3.svg";
import blob4 from "./assets/blob-4.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import bgmain from './assets/bgmain.svg'

export default function SecOne() {
    // const container = useRef();
    // useGSAP(() => {
    //     gsap.to('.sh-1',{x:-200,rotation:360,ease:'elastic',repeat:-1,duration:5,yoyo:true})
    //     gsap.to('.sh-2',{x:-200,rotation:360,ease:'elastic',repeat:-1,duration:6,yoyo:true})   
    //     gsap.to('.sh-3',{x:200,rotation:-360,ease:'elastic',repeat:-1,duration:5,yoyo:true})
    //     gsap.to('.sh-4',{x:200,rotation:-360,ease:'elastic',repeat:-1,duration:6,yoyo:true})
    // }, { scope: container });
    const contain = useRef()
    useGSAP(() => {
      gsap.to('.circle',{y:-180,width:'13vmin',height:'13vmin',rotation:360,ease:'elastic',repeat:-1,duration:5,yoyo:true})
      gsap.to('#circle2',{y:-200,rotation:-360,ease:'elastic',repeat:-1,duration:5,yoyo:true})
    },{scope:contain})
  
  return (
    <div
      className="vw-100 row d-flex flex-column  align-items-center justify-content-center"
      id="sec-1" 
      ref={contain}
    >

    <div className="col-12 text-center display-3 z-2">
      {'<'}Frontend developer{'/>'}
    </div>
    <p className="col-12 text-center mt-5 z-2 jk-font-clr" >A passsionate developing in web Apps and responsive over all devices using recent <br /> libaries and Frontend tolls and frameworks </p>

      <div id="circle" className="col-12 circle">

      </div>
      <div id="circle2" className="col-12 circle">

      </div>
     

      {/* <img src={blob} className="j-sh sh-1 col-12 col-sm-5 col-lg-4" alt="" />
      <img src={blob2} className="j-sh sh-2 col-8 col-sm-5 col-lg-4" alt="" />
      <img src={blob3} className="j-sh sh-3 col-8 col-sm-5 col-lg-4" alt="" />
      <img src={blob4} className="j-sh sh-4 col-8 col-sm-5 col-lg-4" alt="" /> */}

    </div>
  );
}
