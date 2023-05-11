import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Resume from "./Resume";

function Navigation() {
  function about(){
    console.log(document.querySelector("#about"))
    document.querySelector("#about").style="display: block"
    document.querySelector("#portfolio").style="display: none"
    document.querySelector("#contact").style="display: none"
    document.querySelector("#resume").style="display: none"

  }
  function portfolio(){
    console.log(document.querySelector("#about"))
    document.querySelector("#about").style="display: none"
    document.querySelector("#portfolio").style="display: block"
    document.querySelector("#contact").style="display: none"
    document.querySelector("#resume").style="display: none"

  }
  function contact(){
    console.log(document.querySelector("#about"))
    document.querySelector("#about").style="display: none"
    document.querySelector("#portfolio").style="display: none"
    document.querySelector("#contact").style="display: block"
    document.querySelector("#resume").style="display: none"

  }
  function resume(){
    console.log(document.querySelector("#about"))
    document.querySelector("#about").style="display: none"
    document.querySelector("#portfolio").style="display: none"
    document.querySelector("#contact").style="display: none"
    document.querySelector("#resume").style="display: block"

  }
  return (
    <nav>
      <ul>
        <li><button onClick={about}>About Me</button></li>
        <li><button onClick={portfolio}>Portfolio</button></li>
        <li><button onClick={contact}>Contact</button></li>
        <li><button onClick={resume}>Resume</button></li>
      </ul>
    </nav>
  );
}

export default Navigation;
