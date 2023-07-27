export default function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container-fluid bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 mt-3">
                <h4 className="text-center text-uppercase text-md-left">
                  Links
                </h4>
                <div className="row ">
                  <div className="col-6">
                    <ul
                      className="list-unstyled text-center text-md-left"
                      style={{ lineHeight: "30px" }}
                    >
                      <li>
                        <a
                          className="text-muted"
                          href="https://www.hokben.co.id/corporate"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="https://www.hokben.co.id/contact-us"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="https://www.hokben.co.id/terms"
                        >
                          Terms and Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul
                      className="list-unstyled text-center text-md-left"
                      style={{ lineHeight: "30px" }}
                    >
                      <li>
                        <a
                          className="text-muted"
                          href="https://www.hokben.co.id/privacy-policy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="https://www.hokben.co.id/order-history"
                        >
                          Order Tracking
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2 mt-3">
                <div className="text-center">
                  <img
                    className="mx-auto my-auto hokben-img-delivery"
                    alt=""
                    src="https://www.hokben.co.id/assets/img/hokbendelivery.png"
                    height="100"
                  />
                </div>
              </div>

              <div className="col-12 col-md-5 mt-3 col-md-center">
                <h4 className="text-center text-uppercase text-lg-center mr-ml-6">
                  Follow Us{" "}
                </h4>
                <ul
                  className="list-inline text-center text-lg-center mb-0"
                  style={{ lineHeight: "30px" }}
                >
                  <li className="list-inline-item">
                    <a alt="" href="https://www.youtube.com/hokbenable">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/Youtube_48px.svg"
                        width="35px"
                        alt=""
                        height="35px"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/HokBen">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/Twitter_48px.svg"
                        width="35px"
                        alt=""
                        height="35px"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/pages/Hoka-Hoka-Bento/22801653893">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/Facebook_48px.svg"
                        width="35px"
                        height="35px"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/hokben_id/">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/instagram.svg"
                        width="27px"
                        height="27px"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.tiktok.com/@hokben_id">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/tiktok.png"
                        width="30px"
                        alt=""
                        height="30px"
                      />
                    </a>
                  </li>
                </ul>

                <p
                  className="text-center text-md-right"
                  style={{ lineHeight: "30px" }}
                >
                  Email : <b>info@hokben.co.id</b>
                </p>
                <ul
                  className="list-inline text-center text-lg-center mb-0 mt-2"
                  style={{ lineHeight: "30px" }}
                >
                  <li className="list-inline-item">
                    <a href="https://apps.apple.com/id/app/hokben-app/id1501134613">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/applestoreButton.png"
                        width="110px"
                        height="45px"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://play.google.com/store/apps/details?id=id.co.hokben.revamp&amp;hl=in&amp;gl=US">
                      <img
                        src="https://www.hokben.co.id/assets/img/icon/playstoreButton.png"
                        width="95px"
                        alt=""
                        height="65px"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto my-2">
                <p className="small text-center" style={{ lineHeight: "15px" }}>
                  All images and materials are copyright protected and are the
                  property of PT Eka Bogainti. Unauthorized use and/or
                  duplication of these images and materials without written
                  permission is against the law.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <img
              className="img-fluid"
              src="https://www.hokben.co.id/assets/img/group_539.png"
              alt=""
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
