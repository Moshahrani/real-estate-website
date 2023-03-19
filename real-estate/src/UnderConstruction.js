import underConstruction from "./underConstruction.jpg";

const UnderConstruction = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${underConstruction})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          maxWidth: "100%",
          zIndex: 999
        }}
      ></div>
    );
  }
  
  export default UnderConstruction;