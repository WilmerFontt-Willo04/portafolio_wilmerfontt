import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";
import * as Icon from "react-feather";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <>
          <footer>
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            <h5 className="mt-4 ml-5">
              <Image
                src="/CarbonCopyCloner_2.png"
                alt="copyright"
                className="w-6 h-6"
                width={25}
                height={25}
              />
              Wilmer Fontt_Portafolio. &copy;
            </h5>
            <ul className="social_icon">
              <li>
                <a href="#">
                  <Icon.Facebook className="w-6 h-6 mr-1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon.Twitter className="w-6 h-6 mr-1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon.Instagram className="w-6 h-6 mr-1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon.Linkedin className="w-6 h-6 mr-1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon.GitHub className="w-6 h-6 mr-1" />
                </a>
              </li>
            </ul>
            <ul className="menu">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/technologies">
                <a>Technologies</a>
              </Link>
              <Link href="/github">
                <a>Github</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </ul>
            <p className="text-success">
              &copy; 2021_@Willo04 | All Rights Reserved
              <Image
                src="/CarbonCopyCloner_2.png"
                alt="copyright"
                className="w-6 h-6"
                width={25}
                height={25}
              />
            </p>
          </footer>
        </>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;
