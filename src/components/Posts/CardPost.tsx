import { Avatar, Button, Card } from "flowbite-react";
import profilePic from "../../assets/profile-picture-1.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const CardPost = () => {
  return (
    <Card className="w-[500px] items-start justify-start max-sm:w-full">
      <Avatar className="items-start justify-start" img={profilePic} rounded>
        <div className="space-y-1 font-medium dark:text-white">
          <div className="text-start">Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            2 hours ago
          </div>
        </div>
      </Avatar>
      <div>
        <p className="mb-4 text-start text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo a
          magni ipsa blanditiis sint culpa dolorum corrupti velit, ad reiciendis
          fugit atque dolorem molestiae libero nihil distinctio est, dolores
          minima!
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Button color="gray" fullSized>
          <AiOutlineLike className="mr-3 size-4" />
          Like
        </Button>
        <Button color="gray" fullSized>
          <FaRegComment className="mr-3 size-4" />
          Comment
        </Button>
      </div>
    </Card>
  );
};

export default CardPost;
