import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";
import { skills, experiences, projects } from "../profile";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { Section } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <Image
                src="/foto_perfil.png
                "
                alt="Foto Perfil"
                className="img-fluid"
                width={600}
                height={600}
              />
            </div>
            <div className="col-md-8">
              <BackgroundAnimation className="relative" />
              <span className="absolute fixed-top">
                <h1>Wilmer Fontt</h1>
                <h3>Developer JavaScript_React_Next.js</h3>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae atque ullam perferendis harum, nisi porro voluptate,
                  iste consequuntur enim reprehenderit architecto consectetur
                  cum? Totam ad molestias natus illum illo officia.
                </p>
                <Link href="/hireme">
                  <a className="btn btn-outline-light">Hire me</a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-2" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="m-auto mt-2">{percentage}%</span>
                </div>
              </div>
            ))}
            <Link href="/technologies">
              <a className="btn btn-outline-secondary bg-dark">
                <Icon.PlusSquare className="w-4 h-4 mr-1" />
                More Skills
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sint excepturi ea explicabo. Illum suscipit illo, porro
                    quisquam voluptatem officiis fugiat vel animi aliquam
                    inventore rem. Quo laudantium temporibus cupiditate. Aut?
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/experience">
              <a className="btn btn-outline-secondary ml-4">
                Know More Experience
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">
                  <Image
                    src="/portfolio_3.png"
                    alt="Foto Perfil"
                    className="ms-3"
                    width={50}
                    height={50}
                  />{" "}
                  My Personal Portfolio
                </h1>
              </div>
              {projects.map(
                ({ id, name, description, image, tags, url, icons }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <Image
                          src={`/${image}`}
                          alt="avatar proyect"
                          className="card-img-top"
                          width={400}
                          height={320}
                        />
                        <span className="">
                          {icons.map((icon, i) => (
                            <Image
                              src={`/${icon}`}
                              alt="icon"
                              key={i}
                              className="w-8 h-8 mx-1 mt-1 text-right"
                              width={32}
                              height={32}
                            />
                          ))}
                        </span>
                      </div>
                      <div className="card-body text-center">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <span className="bg-secondary text-dark rounded-lg mt-2 px-3">
                          Stack
                        </span>
                        <span className="tagsList">
                          {tags.map((tag, i) => (
                            <p
                              className="text-dark bg-secondary mr-2 rounded-lg px-2"
                              key={i}
                            >
                              {tag}
                            </p>
                          ))}
                        </span>

                        <a
                          href={url}
                          // target="_blank"
                          className="btn btn-outline-secondary mb-3"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/proyect">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
