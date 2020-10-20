const FBPost = ({ post }) => {
  const permalink = post.permalink_url;
  const src = post.attachments.data[0].media.image.src;
  return (
    <div className="paper p-4">
      <img src={src} className="mb-4 paper"></img>
      <a href={permalink} className="link" rel="noreferrer">
        Zobacz więcej...
      </a>
    </div>
  );
};

export default FBPost;
