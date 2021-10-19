import React from "react";
import Header from "./Header";
import './Gmail.css'
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import  Widget from "./Widget";
function Gmail(){
    return(
        <div className="gmail">
        <Header/>
        <div className="gmailbody">
        <Sidebar/>
        <Mail/>
        <Widget/>
        </div>
        </div>
    );
}
export default Gmail;