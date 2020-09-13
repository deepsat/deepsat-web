export default function Post({ post_data }) {
  const data = post_data.attachments.data[0];
  const { description, url, media } = data;
  console.log(data);
  return (
    <div className="w-1/3 p-4 self-stretch">
      <div className="paper p-4 flex flex-col w-full h-full">
        <img className="mb-4 paper" src={media.image.src} />
        <p className="mt-auto mb-auto">{description}</p>
      </div>
    </div>
  );
}
