const FBPost = ({ post }) => {
  const permalink = post.permalink_url;
  const src = post.attachments.data[0].media.image.src;
  const text = post.message;
  const id = post.id;
  return (
    <div className="paper p-4 flex flex-col md:flex-row items-center">
      <div className="mb-4 md:mb-0 md:mr-4 md:h-64 ">
        <img src={src} className="paper max-h-full"></img>
      </div>
      <div>
        <p>{text}</p>
        <a href={permalink} className="link" rel="noreferrer">
          Czytaj dalej&hellip;
        </a>
      </div>
    </div>
  );
};

export default FBPost;
