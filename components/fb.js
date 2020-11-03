import { MdArrowForward } from "react-icons/md";
import Excerpt from "./excerpt";

const FBPost = ({ post }) => {
  const permalink = post.permalink_url;
  const src = post.attachments.data[0].media.image.src;
  const text = post.attachments.data[0].description;
  const id = post.id;
  return (
    <div className="paper p-4 flex flex-col lg:flex-row items-center">
      <div className="mb-4 lg:mb-0 lg:mr-4 lg:w-64 flex-shrink-0">
        <img src={src} className="paper max-h-full"></img>
      </div>
      <div className="flex self-stretch flex-grow">
        <p>
          <Excerpt text={text} limit={30}></Excerpt>
        </p>
        <a
          href={permalink}
          className="block ml-auto mt-auto link"
          rel="noreferrer"
        >
          <MdArrowForward className="inline text-xl" />
        </a>
      </div>
    </div>
  );
};

export default FBPost;
