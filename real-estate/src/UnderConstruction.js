import underConstruction from ".//media/underConstruction.jpg";

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
          zIndex: 9,
        }}
      ></div>
    );
  }
  
  export default UnderConstruction;