import React from "react";
import "./About.css"
import profilePic from "../../assets/Images/profilepic.png"
import linkedInPic from "../../assets/Images/in_image2.png"
import githubPic from "../../assets/Images/GitHub-Mark.png"
import resumePic from "../../assets/Images/resumepic.jpg"


function linkedIn(){
    window.open("https://www.linkedin.com/in/nathan-darnell-408169a8/")
}
function github(){
    window.open("https://github.com/nddarnell")
}
function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mt-5">
                        <h2 className="text-center">About Me</h2>
                        <hr />
                        <div className="transparentBox rounded">
                            <p className="text-center">
                                My name is Nathaniel Darnell and I am an aspiring Web Developer. I am currently learning Full Stack Web
                                Development mostly as a hobby. However, I also want to become more versatile in the workforce in hopes of
                                diversifying my income. I am from Yuma, Arizona and have lived in Chandler, Arizona for 7 years. Join me in
                                my journey!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-5 text-center">
                        <img src={profilePic} className="profpic img-fluid rounded-circle" alt="..."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 mt-5">
                        <div className="text-center">
                            <img className="icons img-fluid rounded-circle" src={linkedInPic} alt="..." onClick={linkedIn}/>
                            <img className="icons img-fluid rounded-circle" src={githubPic} alt="..." onClick={github}/>
                            <a href="../../assets/Nathaniel_Darnell_Resume.pdf" target="_blank">
                                <img className="icons img-fluid rounded-circle" src={resumePic} alt="..."/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;