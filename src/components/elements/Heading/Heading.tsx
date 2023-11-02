import Elements from "..";

const HeadingElements = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container-md mt-5 bg-black rounded">
      <div className="d-flex justify-content-between align-items-center text-white">
        <h1>{children}</h1>
        <Elements.Button className="my-4" variant="light" size="lg">
          Other
        </Elements.Button>
      </div>
    </div>
  );
};

export default HeadingElements;
