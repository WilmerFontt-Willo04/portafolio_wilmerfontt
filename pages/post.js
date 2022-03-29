import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center">
        <Image
          src={currentPost.imageURL}
          alt="avatarpost"
          style={{ width: "50%" }}
          className="img-fluid"
          width={600}
          height={600}
        />
        <p className="p-4">{currentPost.content}</p>
        <Link href="/blog" passHref>
          <button className="btn btn-dark">Return</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Post;
