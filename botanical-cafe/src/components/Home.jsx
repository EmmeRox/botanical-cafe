import "./Home.css";
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="background-img md:flex md:space-x-3 p-40 border-4 m-auto max-w-5xl border-pink-300">
      <div className="justify-center pr-20 md:pt-10">
        <h1 className="font-extrabold text-center text-3xl md:text-6xl text-white">
          Botanical Cafe
        </h1>
        <h2 className="text-white pt-10 text2xl md:text-xl">
          Chicago's First Plant Shop and Cafe!
        </h2>
      </div>
      <div className="items-center justify-center">
        <img
          src="../../public/temp-bc-logo.jpg"
          alt="logo"
          className="rounded-full bc-logo"
        />
      </div>
    </div>
  );
}

export default Home;
