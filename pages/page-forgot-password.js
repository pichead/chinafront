import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

function Otp() {
  let Router = useRouter(),
    dataRegister = Router.query;
  //   dataRegister["transaction_id"] = dataRegister.Transid;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location = "/page-otp-reset";

    // const jsonData = {
    //   msisdn: dataRegister.phone,
    //   otp: data.get("otp"),
    //   transaction_id: dataRegister.Transid,
    // };

    // fetch("http://localhost:3001/testVerifyOtp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(jsonData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.RespCode === 200) {
    //       console.log("OTP Success");
    //       saveRegister();
    //     } else {
    //       alert("register fail");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  //SAVE REGISTER
  //   const saveRegister = () => {
  //     //ADD USER
  //     fetch("http://localhost:3001/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dataRegister),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.status === "200") {
  //           alert("register success");
  //           console.log(dataRegister);
  //           window.location = "/page-login";
  //         } else {
  //           alert("register fail");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   };

  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Reset Password">
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <img
                      className="border-radius-15"
                      src="assets/imgs/page/reset-password.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">ลืมรหัสผ่าน</h1>
                          <p className="mb-30">
                            กรอกเบอร์โทรศัพท์ของคุณสำหรับของรหัส OTP
                            เพื่อรีเซ็ตรหัสผ่านใหม่
                          </p>
                        </div>
                        <form onSubmit={handleSubmit} method="post">
                          <div className="login_footer form-group">
                            <div className="chek-form">
                              <input
                                type="text"
                                required=""
                                name="otp"
                                placeholder="เบอร์โทรศัพท์"
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
