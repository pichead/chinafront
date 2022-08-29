import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const surveyRegisterPopup = () => {
  const router = useRouter();
  const [openClass, setOpenClass] = useState(0);

  const onClickBTN = (data) => {
    const jsonData = {
      surveys: data,
    };
    // console.log(data);
    router.push({
      pathname: "/page-register/",
      query: jsonData,
    });
  };
  const handleRemove = () => {
    setOpenClass(!openClass);
  };
  return (
    <>
      <div
        className={
          openClass
            ? "modal fade custom-modal d-none"
            : "modal fade custom-modal  show d-block"
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <Link href="/page-login ">
              <button type="button" className="btn-close"></button>
            </Link>
            <div className="modal-body">
              <div
                className="deal"
                style={{
                  backgroundImage: "url('assets/imgs/banner/survey.png')",
                }}
              >
                <div className="deal-content  detail-info">
                  <h6 className="product-title">
                    {/* <a className="text-heading">Why are you shopping?</a> */}
                    <a className="text-heading">
                      คุณสมัครสมาชิกเพื่อจุดประสงค์อะไร?
                    </a>
                  </h6>
                  <div className="clearfix product-price-cover">
                    <div className="d-flex flex-column gx-2">
                      <a
                        className="btn hover-up"
                        onClick={(e) => {
                          handleRemove();
                          onClickBTN("ใช้งานเอง");
                        }}
                      >
                        สำหรับซื้อสินค้าไปใช้งานเอง{" "}
                        <i className="fi-rs-arrow-right"></i>
                      </a>
                      <br />
                      <a
                        className="btn hover-up"
                        onClick={(e) => {
                          handleRemove();
                          onClickBTN("นำไปขายต่อ");
                        }}
                      >
                        สำหรับซื้อสินค้านำไปขายต่อ{" "}
                        <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          openClass ? "modal-backdrop fade d-none" : "modal-backdrop fade show"
        }
      ></div>
    </>
  );
};

export default surveyRegisterPopup;
