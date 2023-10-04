import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="infopart flex justify-center m-auto max-w-5xl p-10 rounded">
        <p>
          <button onClick={() => window.location.replace("/#top")}>
            <h3 className="text-3xl">Back to Top</h3>
          </button>
        </p>
      </div>
    </>
  );
}

export default Contact;
