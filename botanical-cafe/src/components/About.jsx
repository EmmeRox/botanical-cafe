import "./About.css";
import Plants from "./Plants";
import Coffee from "./Coffee";

function About() {
  return (
    <>
      <div className="infopart p-6 max-w-5xl m-auto">
        <h2 className="text-2xl font-bold m-4">I&apos;m interested in your</h2>
        <div className="interested p-6 pt-3 flex justify-center">
          <Plants />
          <Coffee />
        </div>
      </div>
    </>
  );
}

export default About;
