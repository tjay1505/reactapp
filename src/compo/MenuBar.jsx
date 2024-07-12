import { useState } from "react";

export default function MenuBar({menuTF ,setMenuTF ,setScroll , scroll}) {



    return (
    <div id="ww" className="row w-100 vh-100 m-out-box flex-column align-items-center justify-content-center " menu-display={menuTF ? 'hide': 'show'}>
      <div className="col-10 col-md-6 col-xl-4 pb-3 text-end">
        <button className="btn bg-danger" onClick={() => {
            setMenuTF(!menuTF)
            setScroll(!scroll)
        }} >close</button>
      </div>
      <div className="m-in-box col-10 col-md-6 col-xl-4 h-50 d-flex flex-column align-items-center justify-content-evenly">
        <a  onClick={() => {
            setMenuTF(!menuTF)
        }} href="#">Home</a>
        <a onClick={() => {
            setMenuTF(!menuTF)
        }} href="#contact">Contact</a>
        <a  onClick={() => {
            setMenuTF(!menuTF)
        }} href="#about">About</a>
        <a  onClick={() => {
            setMenuTF(!menuTF)
        }} href="#projects">Project</a>
      </div>
    </div>
  );
}
