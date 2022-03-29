import Layout from "../components/Layout";
import Image from "next/image";

const Contacto = () => {
  return (
    <>
      <Layout title="My Contact">
        <div className="bg-secondary p-3 text-center contact">
          <section className="bg-dark p-4">
            <div className="title">
              <h2 className="text-success mt-3">
                <Image
                  src="/contact_1.png"
                  alt="Foto Perfil"
                  className="w-9 h-9 mr-3"
                  width={100}
                  height={100}
                />
                Contact Us
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                aspernatur laborum atque neque iure.
              </p>
            </div>
            <div className="contactForm ml-3">
              <div className="row">
                <div className="col50">
                  <input type="text" name="" placeholder="First Name" />
                </div>
                <div className="col50">
                  <input type="text" name="" placeholder="Last Name" />
                </div>
              </div>
              <div className="row">
                <div className="col50">
                  <input type="text" name="" placeholder="Email" />
                </div>
                <div className="col50">
                  <input type="text" name="" placeholder="Mobile N°." />
                </div>
              </div>
              <div className="form-group mt-4">
                <textarea
                  className="form-control col100"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="row">
                <div className="col100">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Contacto;
