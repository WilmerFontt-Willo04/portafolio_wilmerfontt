import Layout from "../components/Layout";
import Image from "next/image";

const Technologies = () => {
  return (
    <>
      <Layout title="Technologies & Skills">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/html.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Html</h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/css.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Css
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/bootstrap.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark">
                    *# ._ Bootstrap
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/tailwind_icon.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Tailwind CSS
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/javascript.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark">
                    *# ._ Javascritp
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/react.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ React
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/next_js.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Next.Js</h3>
                </li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/typescript.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Typescript
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/node.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Node.Js</h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/git_icon.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Git
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/firebase.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark">
                    {" "}
                    *# ._ Firebase
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/dart.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# .- Dart
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <Image
                    src="/flutter.svg"
                    alt="Foto Technologie"
                    className="bg-dark rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Flutter</h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <Image
                    src="/npm.svg"
                    alt="Foto Technologie"
                    className="bg-secondary rounded-lg"
                    width={40}
                    height={40}
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# .- Npm
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Technologies;
