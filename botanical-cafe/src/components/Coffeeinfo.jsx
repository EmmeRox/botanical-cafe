import "./Coffeeinfo.css";

function Coffeeinfo() {
  return (
    <>
      <div className="infoCoffee m-auto p-5 max-w-5xl" id="coffee">
        <h4 className="p-4 font-bold text-2xl">Our Coffee</h4>
        <section className="beans flex">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nesciunt cum reprehenderit officia id ea adipisci, excepturi velit
            nostrum mollitia impedit eligendi voluptatum accusantium ullam
            eveniet, dolorem perspiciatis quam totam.
            <img src="/CC-icon.png" className="cc-icon" />
          </p>
          <img src="/cb.jpg" className="rounded" />
        </section>
      </div>
    </>
  );
}

export default Coffeeinfo;
