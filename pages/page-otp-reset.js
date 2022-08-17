import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

function Otp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      //   msisdn: dataRegister.phone,
      //   otp: data.get("otp"),
      //   transaction_id: dataRegister.Transid,
    };
    console.log("RESET PASSWORD!!");
    window.location = "/page-login";
  };

  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="OTP Reset">
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <img
                      className="border-radius-15"
                      src="assets/imgs/page/otp-2.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">OTP</h1>
                          <p className="mb-30">
                            ยืนยัน OTP สำหรับรีเซ็ตรหัสผ่าน{" "}
                            <Link href="/page-login ">
                              <a>ยังไม่ได้รับ OTP</a>
                            </Link>
                          </p>
                        </div>
                        <form method="post" onSubmit={handleSubmit}>
                          <div className="login_footer form-group">
                            <div className="chek-form">
                              <input
                                type="text"
                                required=""
                                name="otp"
                                placeholder="ใส่รหัส OTP"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-heading btn-block hover-up"
                              name="login"
                            >
                              Continue
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Otp;
