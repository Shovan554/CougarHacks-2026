import Lottie from "lottie-react";
import aboutAnimation from "../assets/animations/about.json";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="aboutSection">
      <h1 className="aboutTitle">About</h1>
      
      <div className="aboutContainer">
        <div className="aboutTextContent">
          <p>
            CougarHacks is a 36-hour hackathon hosted at Caldwell University, where you team up, build something awesome, and have a lot of fun doing it. It's basically a full weekend of creating—coding, designing, brainstorming, and shipping a project you're proud of.
          </p>
          <p>
            This year, we're opening CougarHacks to students from every university, not just Caldwell. So whether you're a beginner or you've done hackathons before, you're welcome here. Come with a team, come solo, or come with zero ideas—we'll help you find people and figure out a project.
          </p>
          <p>
            During the event, you'll have mentors, quick workshops, and volunteers around to keep things running smoothly. We'll also have snacks, coffee, and good energy to keep you going through the late-night build sessions.
          </p>
          <p>
            At the end, teams will demo their projects, we'll give out prizes, and you'll leave with something real to put on GitHub, your resume, and your portfolio.
          </p>
        </div>
        
        <div className="aboutAnimationContainer">
          <Lottie 
            animationData={aboutAnimation} 
            loop={true}
            className="aboutAnimation"
          />
        </div>
      </div>
    </section>
  );
}
