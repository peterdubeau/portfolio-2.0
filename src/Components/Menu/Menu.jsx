import React, { useState } from "react";
import About from "../About/About";
import ProjectIcons from "../ProjectIcons/ProjectIcons";
import Contact from "../Contact/Contact";
import GBControls from "../GBControls/GBControls";
import "./Menu.css";

export default function Menu(props) {
  const [display, setDisplay] = useState({
    about: false,
    projects: false,
    contact: false,
  });
  const [gbIntro, setGbIntro] = useState(false);
  const [boxSize, setBoxSize] = useState({
    height: ``,
    width: '',
    done: true
  });
  const [arrowPosition, setArrowPosition] = useState(0);

  const slow = (ms) => {
    return new Promise((slowDown) => setInterval(slowDown, ms));
  };

  const handleChoiceWithSize = (height, width) => async (e) => {
    console.log(e.currentTarget.name)
    console.log("here")
    if (boxSize.done) {
      const { name, value } = e.currentTarget;
      await slow(600);
      setDisplay({ ...display, [name]: value });
      growBox(height, width);
    } 
    
  };

  const handleSelection = async () => {
    if (arrowPosition === 0) {
      
    } else if (arrowPosition === 1) {
      // handleProjects();
    } else if (arrowPosition === 2) {
      // handleContact();
    }
  };

  const handleNext = () => {
    setGbIntro(true);
  };

  const handleBack = () => {
    setGbIntro(false);
  };

  const growBox = async (h, w) => {
    console.log("waaahhh")
    setBoxSize({
      height: `0vh`,
      width: `0vw`,
      done: false,
    });
    for (let i = 0; i < 10; i++) {
      await slow(50);
      setBoxSize({
        height: `${i * h}vh`,
        width: `${i * w}vw`,
        done: false,
      });
    }
    setBoxSize({
      ...boxSize,
      done: true,
    });
  };

  const shrinkBox = async (h, w) => {
    setBoxSize({
      ...boxSize,
    });
    for (let i = 10; i > 0; i--) {
      await slow(50);
      setBoxSize({
        height: `${i * h}vh`,
        width: `${i * w}vw`,
        done: false,
      });
    }
    setBoxSize({
      ...boxSize,
      done: true,
    });
  };

  return (
    <>
      {props.isPageWide ? (
        <>
          <div className="menu-container">
            <div className="light-grey-bar"></div>
            <div className="gray-bar">
              <div className="left-lines">
                <div className="red-line"></div>
                <div className="blue-line"></div>
              </div>
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "10px",
                  color: "white",
                }}
              >
                DOT MATRIX WITH SOUND
              </p>
              <div className="right-lines">
                <div className="red-line"></div>
                <div className="blue-line"></div>
              </div>
            </div>
            <div className="intro">
              <p
                className="intro-text"
                style={gbIntro ? { display: "none" } : { marginTop: "20px" }}
              >
                Welcome to my portfolio. I'm a full stack web developer and
                solutions engineer.
                <br />
                <br />
                <label className="next-button">
                  <input
                    type="radio"
                    className="nes-radio is-dark"
                    name="answer-dark"
                  />
                  <span onClick={handleNext}>Press A</span>
                </label>
              </p>
            </div>
            <div className="nav" style={gbIntro ? {} : { display: "none" }}>
              <h3 className="selection">Make your selection</h3>

              <label className="project-choices">
                <input
                  type="radio"
                  className="nes-radio"
                  name="about"
                  value={display.about}
                  checked={arrowPosition === 0}
                  onClick={handleChoiceWithSize(6, 10)}
                />
                <span>About Me</span>
              </label>

              <label className="project-choices">
                <input
                  type="radio"
                  className="nes-radio"
                  name="projects"
                  value={display.projects}
                  checked={arrowPosition === 1}
                  onClick={handleChoiceWithSize(3, 5)}
                />
                <span>Projects</span>
              </label>

              <label className="project-choices">
                <input
                  type="radio"
                  className="nes-radio"
                  name="contact"
                  value={display.contact}
                  checked={arrowPosition === 2}
                  onClick={handleChoiceWithSize(3, 5)}
                />
                <span>Contact</span>
              </label>
            </div>
            {display.about ? (
              <About
                status={display}
                close={setDisplay}
                boxSize={boxSize}
                slow={slow}
                shrinkBox={shrinkBox}
              />
            ) : (
              ""
            )}
            {display.projects ? (
              <ProjectIcons
                isPageWide={props.isPageWide}
                close={setDisplay}
                shrinkBox={shrinkBox}
                boxSize={boxSize}
                growBox={growBox}
                slow={slow}
              />
            ) : (
              ""
            )}
            {display.contact ? (
              <Contact
                close={setDisplay}
                shrinkBox={shrinkBox}
                boxSize={boxSize}
                growBox={growBox}
                slow={slow}
              />
            ) : (
              ""
            )}
          </div>
          <GBControls
            handleNext={handleNext}
            handleBack={handleBack}
            setArrowPosition={setArrowPosition}
            arrowPosition={arrowPosition}
            gbIntro={gbIntro}
            handleSelection={handleSelection}
            slow={slow}
            display={display}
            setDisplay={setDisplay}
          />
        </>
      ) : (
        <div className="menu-container">
          <div className="intro">
            <p className="intro-text">
              Welcome to my portfolio. I'm a full stack web developer and
              solutions engineer.
            </p>
          </div>
          <div className="nav">
            <h3 className="selection">Make your selection</h3>
              <label
                className="project-choices"
              >
              <input
                  type="radio"
                  className="nes-radio is-dark"
                  name="about"
                  onClick={handleChoiceWithSize(6, 10)}
                  checked={display.about}
              />
              <span>About Me</span>
            </label>

            <label className="project-choices">
              <input
                  type="radio"
                  className="nes-radio is-dark"
                  name="projects"
                  onClick={handleChoiceWithSize(3, 5)}
                  checked={display.projects}
              />
              <span >Projects</span>
            </label>

            <label className="project-choices">
              <input
                  type="radio"
                  className="nes-radio is-dark"
                  name="contact"
                  onClick={handleChoiceWithSize(3, 5)}
                  checked={display.contact}
              />
              <span>Contact</span>
            </label>
          </div>
          {display.about ? (
            <About
              status={display}
              close={setDisplay}
              boxSize={boxSize}
              slow={slow}
              shrinkBox={shrinkBox}
            />
          ) : (
            ""
          )}
          {display.projects ? (
            <ProjectIcons
              close={setDisplay}
              shrinkBox={shrinkBox}
              boxSize={boxSize}
              growBox={growBox}
              slow={slow}
            />
          ) : (
            ""
          )}
          {display.contact ? (
            <Contact
              close={setDisplay}
              shrinkBox={shrinkBox}
              boxSize={boxSize}
              growBox={growBox}
              slow={slow}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
