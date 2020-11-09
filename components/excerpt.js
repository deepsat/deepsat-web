const Excerpt = ({ text, limit }) => {
  var filter = text.replace(/\s+/g, " ");
  var wordsarr = filter.split(" ");

  if (wordsarr.length < limit) {
    return <>{text}</>;
  } else {
    var result = "";

    for (var i = 0; i < limit; i++) {
      result += " " + wordsarr[i];
      if (i != limit - 1) result += " ";
    }
    result += "…";
    return <>{result}</>;
  }
};
Excerpt.defaultProps = {
  text: "",
  limit: 30,
};
export default Excerpt;
