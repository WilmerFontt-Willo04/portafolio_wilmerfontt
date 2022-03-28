import Layout from "../components/Layout";

const Technologies = () => {
  return (
    <>
      <Layout title="Technologies & Skills">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="html.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Html</h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="css.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Css
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="bootstrap.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark">
                    *# ._ Bootstrap
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="tailwind_icon.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Tailwind CSS
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="javascript.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark">
                    *# ._ Javascritp
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="react.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ React
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="next_js.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Next.Js</h3>
                </li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="typescript.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Typescript
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="node.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Node.Js</h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="git_icon.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# ._ Git
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="firebase.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark">
                    {" "}
                    *# ._ Firebase
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="dart.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dsecondary">
                    *# .- Dart
                  </h3>
                </li>
                <li className="list-group-item d-flex bg-secondary">
                  <img
                    src="flutter.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-dark rounded-lg"
                  />
                  <h3 className="d-flex mt-2 ml-2 text-dark"> *# ._ Flutter</h3>
                </li>
                <li className="list-group-item d-flex bg-dark">
                  <img
                    src="npm.svg"
                    alt="Foto Technologie"
                    className="w-9 h-9 mr-2 bg-secondary rounded-lg"
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
