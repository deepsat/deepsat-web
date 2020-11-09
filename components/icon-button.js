const IconButton = ({ icon, href, color: bgColor, textColor, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="btn btn-generic icon-button"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {icon}
      {text}
    </a>
  );
};
IconButton.defaultProps = {
  textColor: "#fff",
};
export default IconButton;
