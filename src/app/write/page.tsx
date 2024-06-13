import TextEditor from "@/components/TextEditor";
import { auth } from "@/lib/nextAuth/auth";

const NewPost = async () => {
  const session  = await auth()

  return (
    <div>
      <TextEditor session={session} />
    </div>
  );
};

export default NewPost;
