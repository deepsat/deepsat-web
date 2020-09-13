export default function Section(props) {
  return (
    <div {...props} className={"paper px-8 py-16 md:px-16 mb-32 " + props.className}>
      {props.heading ? <h1 className="text-3xl mb-8">{props.heading}</h1> : ""}
      {props.children}
    </div>
  );
}
