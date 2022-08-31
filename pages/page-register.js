import Link from "next/link";
import Layout from "../components/layout/Layout";
import SurveyRegisterPopup from "./../components/elements/surveyRegisterPopup";
import { useRouter } from "next/router";
import { useState } from "react";

function Login() {
  const router = useRouter(),
    survey = router.query;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      sex: data.get("sex"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      Transid: "",
      survey: survey.surveys,
    };
    console.log(jsonData);
    const phoneNumber = {
      phoneno: data.get("phone"),
    };

    if (jsonData.password === jsonData.confirmPassword) {
      fetch("http://localhost:3001/testSendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(phoneNumber),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.RespCode === 200) {
            console.log("register success");
            jsonData.Transid = data.Result.Transid;

            // console.log(jsonData);
            router.push({
              pathname: "/page-otp/",
              query: jsonData,
            });
          } else {
            console.log("register fail");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Passwords do not match !");
    }
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
        }
      }
    }

  }

  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Login & Register">
        <SurveyRegisterPopup />
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <img
                      className="border-radius-15"
                      src="assets/imgs/page/register-1.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">สมัครบัญชีผู้ใช้</h1>
                          <p className="mb-30">
                            มีบัญชีอยู่แล้ว{" "}
                            <Link href="/page-login ">
                              <a>คลิกที่นี่</a>
                            </Link>
                          </p>
                        </div>

                        <form method="post" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="form-group col-4">
                              <label>
                                ชื่อจริง <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="ระบุชื่อจริง" required name="firstname" />
                            </div>
                            <div className="form-group col-4">
                              <label>
                                นามสกุล <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="ระบุนามสกุล" required name="lastname" />
                            </div>
                            {/* <div className="form-group">
                              <input
                                type="text"
                                required=""
                                name="sex"
                                placeholder="เพศ *"
                              />
                            </div> */}

                            <div className="form-group col-4">
                              <label>
                                เพศ <span className="required">*</span>
                              </label>
                              <select
                                name="sex"
                                className="form-control select-active text-secondary"
                                required
                              >
                                <option value="" selected disabled>เลือกเพศ</option>
                                <option value="ชาย">ชาย</option>
                                <option value="หญิง">หญิง</option>
                              </select>
                            </div>

                            <div className="form-group col-6">
                              <label>
                                อีเมล <span className="required">*</span>
                              </label>
                              <input required type="email" placeholder="email@mymail.com" name="email" />
                            </div>
                            <div className="form-group col-6">
                              <label>
                                เบอร์โทรศัพท์{" "}
                                <span className="required">*</span>
                              </label>
                              <input placeholder="0987654321" required type="tel" onChange={phoneCheck} value={phoneNo} name="phone" />
                            </div>
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
                                  <span>Remember me</span>
                                </label>
                              </div>
                            </div>
                            <a className="text-muted" href="#">
                              Forgot password?
                            </a>
                          </div> */}

                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-heading btn-block hover-up"
                                name="login"
                              >
                                Continue
                              </button>
                            </div>
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
