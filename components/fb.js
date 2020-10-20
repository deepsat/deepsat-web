const FBPost = ({ post }) => {
  const permalink = post.permalink_url;
  const src = post.attachments.data[0].media.image.src;
  const text = post.message;
  return (
    <div className="paper p-4 flex items-stretch">
      <img src={src} className="mb-4 md:mb-0 md:mr-4 paper h-56"></img>
      <div className="flex flex-col">
        <p>{text}</p>
        <a href={permalink} className={`link mt-auto mb-auto`} rel="noreferrer">
          Zobacz więcej...
        </a>
      </div>
    </div>
  );
};

export default FBPost;
