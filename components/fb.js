const FBPost = ({ post }) => {
  const permalink = post.permalink_url;
  const src = post.attachments.data[0].media.image.src;
  const text = post.story;
  return (
    <div className="paper p-4">
      <img src={src} className="mb-4 paper w-48"></img>
      <p>{text}</p>
      <a href={permalink} className="link" rel="noreferrer">
        Zobacz więcej...
      </a>
    </div>
  );
};

export default FBPost;
