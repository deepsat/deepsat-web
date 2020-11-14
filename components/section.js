import Zoom from "react-reveal/Zoom"

const Section = ({ className, children, heading, ...props }) => {
  return (
    <Zoom bottom>
      <div className={className} {...props}>
        <div className="paper px-8 py-16 lg:px-16">
          {heading ? <h1 className="text-3xl mb-8">{heading}</h1> : ""}
          {children}
        </div>
      </div>
    </Zoom>
  );
};
Section.defaultProps = {
  className: "mt-32",
};
export default Section;
