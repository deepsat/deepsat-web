const FBPost = ({ post }) => {
  const permalink = post.permalink_url;
  const src = post.attachments.data[0].media.image.src;
  const text = post.message;
  const id = post.id;
  return (
    <div className="paper p-4 flex flex-col lg:flex-row items-center">
      <div className="mb-4 lg:mb-0 lg:mr-4 lg:h-64">
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
