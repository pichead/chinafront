import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      phone: data.get("phone"),
      password: data.get("password"),
    };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          alert("Login Success");
          localStorage.setItem("user", data.phone);
          localStorage.setItem("id", data.id);
          localStorage.setItem("token", data.token);
          window.location = "/page-account";
        } else {
          alert("User/Password Incorrect");
          console.log(jsonData);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [phoneNo, setphoneNo] = useState("")
  const [validLogin, setvalidLogin] = useState(true)
  const [OTPDisabled, setOTPDisabled] = useState(true)
  const [OTPSentBtn, setOTPSentBtn] = useState(true)
  const [OTPVal, setOTPVal] = useState("")



  const OTPSent = () => {
    console.log("OTP Sent btn Click!")
  }

  const OTPChange = (e) => {
    const OTPInputChange = e.target.value
    if (!(/\D/.test(OTPInputChange))) {
      if (OTPInputChange.length < 7) {
        setOTPVal(OTPInputChange)
        if (OTPInputChange.length == 6) {
          setvalidLogin(false)
        }
        else {
          setvalidLogin(true)
        }
      }
    }

  }

  const phoneCheck = (e) => {
    const phoneInput = e.target.value
    if (!(/\D/.test(phoneInput))) {
      if (phoneInput[0] != 0) {
        setphoneNo("")
      }
      else {
        if (phoneInput.length < 11) {
          setphoneNo(phoneInput)
          if (phoneInput.length == 10) {
            setOTPSentBtn(false)
            setOTPDisabled(false)
          }
          else {
            setOTPSentBtn(true)
            setOTPDisabled(true)
          }
        }
      }
    }

  }


  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Login & Register">
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <img
                      className="border-radius-15"
                      src="assets/imgs/page/login-4.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">ล็อกอิน</h1>
                          <p className="mb-30">
                            สร้างบัญชีผู้ใช้ใหม่ของคุณ{" "}
                            <Link href="/page-register">
                              <a>คลิกที่นี่</a>
                            </Link>
                          </p>
                        </div>
                        <form method="post" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="tel"
                              value={phoneNo}
                              name="phone"
                              maxLength="10"
                              minLength="10"
                              placeholder="เบอร์โทรศัพท์ *"
                              onChange={phoneCheck}
                              required
                            />
                          </div>
                          <div className="row">
                            <div className="col-8 form-group">
                              <input
                                type="number"
                                minLength="6"
                                maxLength="6"
                                required
                                placeholder="ระบุ OTP *"
                                disabled={OTPDisabled}
                                value={OTPVal}
                                onChange={OTPChange}
                              />
                            </div>
                            <div className="col-4">
                              <button 
                              disabled={OTPSentBtn}
                              className="btn col-12" 
                              type="button" 
                              onClick={OTPSent} 
                              style={{ height: "64px" }}>
                              OTP
                              </button>

                            </div>

                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-heading btn-block hover-up"
                              name="login"
                              disabled={validLogin}
                            >
                              Log in
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

export default Login;
