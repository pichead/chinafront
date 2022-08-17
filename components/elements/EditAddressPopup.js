import Link from "next/link";
import { useState, useEffect } from "react";

const Addresspopup = (props) => {
  const [openClass, setOpenClass] = useState(false);
  //ALL DATA ADDRESS
  const [province, setProvince] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);

  //SELECT ADDRESS
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [houseNumber, setHouseNumber] = useState();
  const [postcode, setPostcode] = useState();
  const [SLprovince, setSLprovince] = useState("");
  const [SLdistricts, setSLdistrict] = useState("");
  const [SLsubdistrict, setSLsubdistrict] = useState("");

  //DATA INFORMATION
  // const [dataAddress, setDataAddress] = useState([]);

  //SUBMIT
  const handleSubmit = () => {
    const jsonData = {
      firstname: firstname,
      lastname: lastname,
      houseNumber: houseNumber,
      province: SLprovince,
      districts: SLdistricts,
      subdistricts: SLsubdistrict,
      postcode: postcode,
      user_id: localStorage.getItem("id"),
      id_address: props.id,
    };
    console.log(jsonData);
    fetch("http://localhost:3001/editAddress", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((provinces) => {
        if (provinces.status === "200") {
          // setDataAddress();
          console.log("Edit Success");
        } else {
          console.log("Edit False");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const selectProvince = () => {
    fetch("http://localhost:3001/province", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((provinces) => {
        if (provinces) {
          setProvince(provinces.data);
        } else {
          console.log("False Provinces");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //functions select province
  const onChangeProvince = (name) => {
    setSLprovince(name);
    fetch(`http://localhost:3001/district/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((district) => {
        if (district) {
          setDistrict(district.data);
        } else {
          console.log("No data district");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onChangeDistrict = (id) => {
    setSLdistrict(districts[id].district);
    setSubdistrict(districts[id].subdistrict);
  };

  const onChangeSubdistrict = (name) => {
    setSLsubdistrict(name);
  };

  useEffect(() => {
    selectProvince();
  }, []);

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
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                props.handleClose();
              }}
            ></button>
            <div className="modal-body">
              <div className="deal">
                {/* <form method="post" onSubmit={handleSubmit}> */}
                <form
                  method="post"
                  onSubmit={handleSubmit}
                  className="deal-top"
                >
                  <h2 className="text-brand">แก้ไขที่อยู่รับสินค้า</h2>
                  <h2 className="text-brand">{props.test}</h2>
                  <div className="row mt-4">
                    <div className="form-group col-md-6">
                      <label>
                        ชื่อจริง <span className="required">*</span>
                      </label>
                      <input
                        required=""
                        className="form-control"
                        name="firstname"
                        type="text"
                        onChange={(event) => setFirstname(event.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        นามสกุล <span className="required">*</span>
                      </label>
                      <input
                        required=""
                        className="form-control"
                        name="lastname"
                        type="text"
                        onChange={(event) => setLastname(event.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>
                        ที่อยู่จัดส่ง <span className="required">*</span>
                      </label>
                      <input
                        required=""
                        className="form-control"
                        name="name"
                        type="text"
                        onChange={(e) => setHouseNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-4 ">
                      <label>
                        จังหวัด <span className="required">*</span>
                      </label>
                      <select
                        className="form-control select-active text-secondary"
                        onChange={(e) => {
                          onChangeProvince(e.target.value);
                        }}
                      >
                        <option value="">เลือกจังหวัด . . .</option>
                        {province.map((provinceAll, key) => (
                          <option key={key} value={provinceAll.province}>
                            {provinceAll.province}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label>
                        อำเภอ <span className="required">*</span>
                      </label>
                      <select
                        className="form-control select-active text-secondary"
                        onChange={(e) => onChangeDistrict(e.target.value)}
                      >
                        <option value="">เลือกอำเภอ . . .</option>
                        {districts.map((districtsAll, key) => (
                          <option key={key} value={key}>
                            {districtsAll.district}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label>
                        ตำบล <span className="required">*</span>
                      </label>
                      <select
                        className="form-control select-active text-secondary"
                        onChange={(e) => onChangeSubdistrict(e.target.value)}
                      >
                        <option value="">เลือกตำบล . . .</option>
                        {subdistrict.map((subdistrictAll, key) => (
                          <option key={key} value={subdistrictAll}>
                            {subdistrictAll}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label>
                        รหัสไปรษณีย์ <span className="required">*</span>
                      </label>
                      <input
                        required=""
                        className="form-control form-control-sm"
                        name="postcode"
                        type="text"
                        onChange={(e) => setPostcode(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn hover-up"
                      onClick={() => {
                        props.handleClose();
                        handleSubmit();
                        props.data();
                      }}
                    >
                      ยืนยันการแก้ไข
                    </button>
                  </div>
                </form>
                {/* </form> */}
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

export default Addresspopup;
