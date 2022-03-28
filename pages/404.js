import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center py-5">
      <h1 className="display-1">404</h1>
      <p>
        This page does not exists. Please return to...
        <Link href="/">
          <a className="ml-1">Return to Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
