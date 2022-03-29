import Layout from "../components/Layout";
import Error from "./_error";
import Image from "next/image";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="My Github" footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h3>
              <Image
                src="/github_icon_1.png"
                alt="Foto Perfil"
                className="mr-1 mb-2"
                width={60}
                height={60}
              />
              {user.name}
            </h3>
            <Image
              src="/avatar-tec.png"
              alt=""
              className="rounded-circle"
              width={500}
              height={500}
            />
            <p className="text-success my-3">{user.bio}</p>
            <a href={user.blog} className="btn btn-outline-secondary my-2">
              My Blog
            </a>
            <a href={user.html_url} className="btn btn-outline-secondary">
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Github.proptypes = {};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/WilmerFontt-Willo04");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
