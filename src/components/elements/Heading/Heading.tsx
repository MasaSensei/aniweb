import Elements from "..";

const HeadingElements = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container-md mt-5 bg-black">
      <div className="d-flex justify-content-around align-items-center text-white">
        <h1>{children}</h1>
        <Elements.Button className="my-4" variant="light" size="lg">
          Watch Now
        </Elements.Button>
      </div>
    </div>
  );
};

export default HeadingElements;
