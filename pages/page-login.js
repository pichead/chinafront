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

  const [phoneNo,setphoneNo] = useState("")
  const [validLogin,setvalidLogin] = useState(true)

  const phoneCheck = (e) =>{
    const phoneInput = e.target.value
    if(!(/\D/.test(phoneInput))){
      if(phoneInput[0] != 0){
        setphoneNo("")
      }
      else{
        if(phoneInput.length < 11){
          setphoneNo(phoneInput)
          if(phoneInput.length == 10){
            setvalidLogin(false)
          }
          else{
            setvalidLogin(true)
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
                          {/* <div className="form-group">
                            <input
                              required=""
                              type="password"
                              name="password"
                              placeholder="รหัสผ่าน *"
                            />
                          </div> */}
                          {/* <div className="login_footer form-group mb-50">
                            <div className="chek-form">
                              <div className="custome-checkbox">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkbox"
                                  id="exampleCheckbox1"
                                  value=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleCheckbox1"
                                >
                                  <span>จำบัญชีและรหัสผ่านของฉันไว้</span>
                                </label>
                              </div>
                            </div>
                            <Link href="/page-forgot-password">
                              <a className="text-muted" href="#">
                                ลืมรหัสผ่าน
                              </a>  
                            </Link>
                          </div> */}
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
