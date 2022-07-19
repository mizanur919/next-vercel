import Image from "next/image";
// import img from "../public/1.jpg";

function GreenPage() {
  return (
    <div>
      <h1>Green Page</h1>
      {/* <Image
        src={img}
        placeholder="blur"
        alt="green"
        width="280"
        height="420"
      /> */}
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path} style={{ position: "relative" }}>
            <Image
              src={`/${path}.jpg`}
              alt="green"
              width="280"
              height="420"
              layout="fixed"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GreenPage;
