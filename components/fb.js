import {
  FacebookProvider,
  Initialize,
  Page,
  EmbeddedPost,
  Feed,
} from "react-facebook";

export default function FB({
  appId,
  posts,
  className,
  postClassName,
  postWidth,
}) {
  const width = postWidth ?? "";
  return (
    <FacebookProvider appId={appId}>
      <div className={className}>
        {posts.map((post) => (
          <div className={postClassName} style={{ width }}>
            <EmbeddedPost href={post} width={width} />
          </div>
        ))}
      </div>
    </FacebookProvider>
  );
}
