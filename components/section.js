export default function Section(props) {
  const className = props.className ?? "mt-32";
  return (
    <div {...props} className={className}>
      <div className="paper px-8 py-16 lg:px-16">
        {props.heading ? (
          <h1 className="text-3xl mb-8">{props.heading}</h1>
        ) : (
          ""
        )}
        {props.children}
      </div>
    </div>
  );
}
