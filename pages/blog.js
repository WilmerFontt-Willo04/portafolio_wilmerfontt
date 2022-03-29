import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

import { posts } from "../profile";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link
          href={`/post?title=${post.title}`}
          as={`/post/${post.title}`}
          passHref
        >
          <button className="btn btn-light">Read</button>
        </Link>
      </div>
    </div>
  </div>
);

const blog = () => {
  return (
    <Layout title="My Blog" footer={false} dark>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;
