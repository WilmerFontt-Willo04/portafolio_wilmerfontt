import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";
import { DiCssdeck } from "react-icons/di";
import { FaBlog } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Image
          src="/services-portfolio-icon.png"
          alt="Foto Perfil"
          className="w-9 h-9"
          width={50}
          height={50}
        />
        <Link href="/">
          <a className="navbar-brand">
            Portafolio <DiCssdeck size="1.8rem" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link active" aria-current="page">
                  <FaBlog size="" className="mr-1" />
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/technologies">
                <a className="nav-link" aria-current="page">
                  <DiTechcrunch className="mr-1" size="1.8rem" />
                  Technologies
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link">
                  <Icon.GitHub className="w-4 h-4 mr-1" />
                  Github
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link" aria-current="page">
                  <Icon.Phone className="w-4 h-4 mr-1" />
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
