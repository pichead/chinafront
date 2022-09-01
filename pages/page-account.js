import Layout from "../components/layout/Layout";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Addresspopup from "../components/elements/EditAddressPopup";
import AddAddresspopup from "../components/elements/AddAddressPopup";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

function Account() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [editPopup, setEditpopup] = useState(false);
  const [addPopup, setAddpopup] = useState(false);
  const [idEditSelect, setIdEditSelect] = useState(0);
  const [information, setInformation] = useState([]);
  const [address, setAddress] = useState([]);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  const togglePopup = (id) => {
    setEditpopup(!editPopup);
    setIdEditSelect(id);
  };
  const toggleAddPopup = () => {
    setAddpopup(!addPopup);
  };
  const onClickLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    window.location = "page-login";
  };

  //VIEW DATA INFO
  const informationData = () => {
    const IdJsonData = {
      id: localStorage.getItem("id"),
    };
    fetch("http://localhost:3001/information", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(IdJsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          console.log("information Success");
          setInformation(data.results);
        } else {
          alert("User/Password Incorrect");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //VIEW DATA ADDRESS
  const addressData = () => {
    const IdJsonData = {
      user_id: localStorage.getItem("id"),
    };
    fetch("http://localhost:3001/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(IdJsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          console.log("Address Success");
          setAddress(data.results);
        } else {
          alert("Address Fails");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //VIEW DATA ADDRESS
  const DeleteAddressData = (id) => {
    const JsonData = {
      id_address: id,
    };
    console.log(JsonData);
    fetch("http://localhost:3001/deleteAddress", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          console.log("Delete Success");
          addressData();
        } else {
          alert("Delete Fails");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    informationData();
    addressData();
  }, []);

  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Account">
        {editPopup ? (
          <Addresspopup
            id={idEditSelect}
            data={addressData}
            handleClose={togglePopup}
          />
        ) : null}
        {addPopup ? (
          <AddAddresspopup data={addressData} handleClose={toggleAddPopup} />
        ) : null}
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dashboard-menu">
                      <ul className="nav flex-column" role="tablist">
                        <li className="nav-item">
                          <a
                            className={
                              activeIndex === 1 ? "nav-link active" : "nav-link"
                            }
                            onClick={() => handleOnClick(1)}
                          >
                            <i className="fi-rs-settings-sliders mr-10"></i>
                            รหัสสมาชิก
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              activeIndex === 2 ? "nav-link active" : "nav-link"
                            }
                            onClick={() => handleOnClick(2)}
                          >
                            <i className="fi-rs-shopping-bag mr-10"></i>
                            ยอดคำสั่งซื้อ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              activeIndex === 3 ? "nav-link active" : "nav-link"
                            }
                            onClick={() => handleOnClick(3)}
                          >
                            <i className="fi-rs-shopping-cart-check mr-10"></i>
                            ยอดเงินคงเหลือ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              activeIndex === 4 ? "nav-link active" : "nav-link"
                            }
                            onClick={() => handleOnClick(4)}
                          >
                            <i className="fi-rs-marker mr-10"></i>
                            ที่อยู่รับสินค้า
                          </a>
                        </li>
                        <li className="nav-item" onClick={onClickLogOut}>
                          <a className="nav-link">
                            <i className="fi-rs-sign-out mr-10"></i>ออกจากระบบ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content account dashboard-content pl-50">
                      <div
                        className={
                          activeIndex === 1
                            ? "tab-pane fade active show"
                            : "tab-pane fade "
                        }
                      >
                        {information.map((data, key) => (
                          <div className="card " key={key}>
                            <div className="card-header">
                              <h3 className="mb-0">รหัสสมาชิก</h3>
                            </div>
                            <div className="card-body ">
                              <p className="p-1 lead">
                                <MdDriveFileRenameOutline
                                  style={{ color: "#3BB77E" }}
                                />
                                &emsp;ชื่อ : {data.firstname} {data.lastname}
                              </p>
                              <p className="p-1 lead">
                                <CgArrowsExpandUpRight
                                  style={{ color: "#3BB77E" }}
                                />
                                &emsp;เพศ : {data.sex}
                              </p>
                              <p className="p-1 lead">
                                <AiOutlineMail style={{ color: "#3BB77E" }} />
                                &emsp;อีเมล : {data.email}
                              </p>
                              <p className="p-1 lead">
                                <AiOutlinePhone style={{ color: "#3BB77E" }} />
                                &emsp;เบอร์โทรศัพท์ : {data.phone}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        className={
                          activeIndex === 2
                            ? "tab-pane fade active show"
                            : "tab-pane fade "
                        }
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">ยอดคำสั่งสื้อ</h3>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>หลายเลขสั่งซื้อ</th>
                                    <th>วันที่</th>
                                    <th>สถานะ</th>
                                    <th>ยอดรวม</th>
                                    <th>ดูรายละเอียด</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>#1357</td>
                                    <td>March 45, 2020</td>
                                    <td>Processing</td>
                                    <td>$125.00 for 2 item</td>
                                    <td>
                                      <a href="#" className="btn-small d-block">
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>#2468</td>
                                    <td>June 29, 2020</td>
                                    <td>Completed</td>
                                    <td>$364.00 for 5 item</td>
                                    <td>
                                      <a href="#" className="btn-small d-block">
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>#2366</td>
                                    <td>August 02, 2020</td>
                                    <td>Completed</td>
                                    <td>$280.00 for 3 item</td>
                                    <td>
                                      <a href="#" className="btn-small d-block">
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 3
                            ? "tab-pane fade active show"
                            : "tab-pane fade "
                        }
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">ยอดเงินคงเหลือ</h3>
                          </div>
                          <div className="card-body contact-from-area">
                            <h1>17 $</h1>
                            <div className="row">
                              <div className="col-lg-8">
                                <form
                                  className="contact-form-style mt-30 mb-50"
                                  action="#"
                                  method="post"
                                >
                                  <button
                                    className="submit submit-auto-width"
                                    type="submit"
                                  >
                                    เติมเงิน
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 4
                            ? "tab-pane fade active show"
                            : "tab-pane fade "
                        }
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-4 ">
                              ที่อยู่รับสินค้า &ensp;
                              <button
                                className="btn p-2"
                                onClick={toggleAddPopup}
                              >
                                เพิ่มที่อยู่
                              </button>
                            </h3>
                            <div className="row mb-3">
                              {address.map((data, key) => (
                                <div className="col-lg-6" key={key}>
                                  <div className="card mb-3 mb-lg-0">
                                    <div className="card-body">
                                      <div>
                                        <h5 className="mb-3">
                                          {"ที่อยู่ที่" + " " + (key + 1)}
                                        </h5>
                                        <p className="lead p-1">
                                          {data.firstname} {data.lastname}
                                        </p>
                                        <p className="lead p-1">
                                          {data.house_number}
                                        </p>
                                        <p className="lead p-1">
                                          {"ตำบล" + " " + data.subdistricts}
                                        </p>
                                        <p className="lead p-1">
                                          {"อำเภอ" + " " + data.districts}
                                        </p>
                                        <p className="lead p-1">
                                          {"จังหวัด" + " " + data.province}
                                        </p>
                                        <p className="lead p-1">
                                          {" "}
                                          {data.postcode}
                                        </p>
                                      </div>

                                      <a
                                        className="btn-small p-1"
                                        onClick={(e) => {
                                          togglePopup(data.id_address);
                                        }}
                                      >
                                        แก้ไข
                                      </a>
                                      <a
                                        className="btn-small p-1"
                                        onClick={(e) => {
                                          DeleteAddressData(data.id_address);
                                        }}
                                      >
                                        ลบ
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>


                        </div>
                      </div>
                      <div
                        className={
                          activeIndex === 5
                            ? "tab-pane fade active show"
                            : "tab-pane fade "
                        }
                      >
                     
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

export default Account;
