import { MdArrowForward } from "react-icons/md";
import Excerpt from "./excerpt";

const FBPost = ({ post }) => {
  const permalink = post.permalink_url ?? "";
  const src = post.attachments.data[0].media.image.src ?? "";
  const text = post.message ?? post.attachments.data[0].description ?? "";
  const id = post.id;
  console.log(post.attachments.data);
  return (
    <div className="paper p-4 flex flex-col xl:flex-row items-center">
      <div className="mb-8 xl:mb-0 xl:mr-4 flex-shrink-0 h-32 xl:h-64 w-full xl:w-64 relative">
        <img
          src={src}
          className="paper absolute top-0 bottom-0 left-0 right-0 m-auto max-w-full max-h-full"
        ></img>
      </div>
      <div className="flex relative self-stretch flex-grow">
        <p>
          <Excerpt text={text} limit={30}></Excerpt>
        </p>
        <a
          href={permalink}
          className="absolute bottom-0 right-0 block link"
          rel="noreferrer"
          target="_blank"
        >
          <MdArrowForward className="inline text-xl" />
        </a>
      </div>
    </div>
  );
};

export default FBPost;
