const IconButton = ({ icon, href, color: bgColor, textColor, text }) => {
  textColor = textColor ?? "#fff";
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

export default IconButton;
