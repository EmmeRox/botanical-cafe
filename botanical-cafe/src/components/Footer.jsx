import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="flex justify-between p-20 pt-5 m-auto max-w-5xl">
        <div className="p-10 pt-5">
          <h6 className="pb-2">Us on Social Media</h6>
          <p className="insta pb-3">
            <a
              href="https://www.instagram.com/botanicalcafechicago/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/instagram-icon-original.svg" className="icon" />
            </a>
          </p>
          <p className="">
            <a
              href="https://www.facebook.com/Botanicalcafechicago/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/facebook-icon-original.svg" className="icon" />
            </a>
          </p>
        </div>
        <div className="p-10 pt-5 text-left text-xl foot">
          <p>Botanical Cafe</p>
          <p>3740 North Lincoln Avenue</p>
          <p>Chicago, Il, 60613</p>
          <p>(312) 815-7515</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
