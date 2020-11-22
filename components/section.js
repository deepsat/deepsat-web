const Section = ({ className, children, heading, ...props }) => {
  return (
    <div className={className} {...props}>
      <div className="paper px-8 py-16 lg:px-16">
        {heading ? <h1 className="text-3xl mb-8">{heading}</h1> : ""}
        {children}
      </div>
    </div>

  );
};
Section.defaultProps = {
  className: "mt-32",
};
export default Section;
