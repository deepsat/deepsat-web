export default function Post({ post_data }) {
  const data = post_data.attachments.data[0];
  const { description, url, media } = data;

  return (
      <div className="paper p-4 flex md:flex-col w-full h-full">
        <img className="mb-4 paper mr-4 md:mr-0 w-5/12 md:w-7/12" src={media.image.src} />
        <p className="mt-auto mb-auto">{description}</p>
      </div>
  );
}
