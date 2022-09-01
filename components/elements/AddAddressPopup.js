import { useState, useEffect } from "react";

const AddAddresspopup = (props) => {
  const [openClass, setOpenClass] = useState(false);
  //ALL DATA ADDRESS
  const [province, setProvince] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);

  //SELECT ADDRESS
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [houseNumber, setHouseNumber] = useState();
  const [postcode, setPostcode] = useState("");
  const [SLprovince, setSLprovince] = useState("");
  const [SLdistricts, setSLdistrict] = useState("");
  const [SLsubdistrict, setSLsubdistrict] = useState("");

  //SUBMIT
  const handleSubmit = () => {
   
    console.log("submit Click!")
    const jsonData = {
      firstname: firstname,
      lastname: lastname,
      houseNumber: houseNumber,
      province: SLprovince,
      districts: SLdistricts,
      subdistricts: SLsubdistrict,
      postcode: postcode,
      user_id: localStorage.getItem("id"),
    };
    fetch("http://localhost:3001/addAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((provinces) => {
        if (provinces.status === "200") {
          // setDataAddress();
          console.log("Add Success");
        } else {
          console.log("Add False");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const PostCodeCheck = (e)=>{
    
    const PostCodeInput = e.target.value
    if (!(/\D/.test(PostCodeInput))) {
      if (PostCodeInput.length < 6) {
        setPostcode(PostCodeInput)
      }
    }


  }

  const selectProvince = () => {
    
    fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => 
        response.text() 
       )
      .then(result => {
        const provinceFetch = JSON.parse(result)
        setProvince(provinceFetch.data)

      })
      .catch(error => console.log('error', error));

  };

  const SelectDistrictReset = () => {
    const DistrictSelect = document.querySelector('#District');
    DistrictSelect.value = ""
  }

  const SelectSubDistrictReset = () => {
    const SubDistrictSelect = document.querySelector('#SubDistrict');
    SubDistrictSelect.value = ""
  }

  //functions select province
  const onChangeProvince = (name) => {
    setSLprovince(name);
    setDistrict([])
    setSubdistrict([])
    setSLdistrict("")
    setSLsubdistrict("")
    SelectDistrictReset()
    SelectSubDistrictReset()

    fetch(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/${name}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        const districtsFetch = JSON.parse(result)
        setDistrict(districtsFetch.data)
        
      })
      .catch(error => console.log('error', error));
  };

  const onChangeDistrict = (id) => {
    SelectSubDistrictReset()
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
                  <h2 className="text-brand">เพิ่มที่อยู่รับสินค้า</h2>
                  <div className="row mt-4">
                    <div className="form-group col-md-6">
                      <label>
                        ชื่อจริงผู้รับ <span className="required">*</span>
                      </label>
                      <input
                        required
                        className="form-control"
                        name="firstname"
                        type="text"
                        onChange={(event) => setFirstname(event.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        นามสกุลผู้รับ <span className="required">*</span>
                      </label>
                      <input
                        required
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
                        required
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
                        style={{height:"64px"}}
                        onChange={(e) => {
                          onChangeProvince(e.target.value);
                        }}
                        required
                      >
                        <option value="" selected disabled hidden>เลือกจังหวัด . . .</option>
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
                        id="District"
                        style={{height:"64px"}}
                        className="form-control select-active text-secondary"
                        onChange={(e) => onChangeDistrict(e.target.value)}
                        required
                      >
                        <option value="" selected disabled>เลือกอำเภอ . . .</option>
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
                        id="SubDistrict"
                        className="form-control select-active text-secondary"
                        onChange={(e) => onChangeSubdistrict(e.target.value)}
                        style={{height:"64px"}}
                        required
                      >
                        <option value="" selected disabled>เลือกตำบล . . .</option>
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
                        required
                        className="form-control form-control-sm"
                        name="postcode"
                        type="text"
                        minLength={5}
                        maxLength={5}
                        onChange={PostCodeCheck}
                        value={postcode}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn hover-up"
                      onClick={() => {
                       
                        handleSubmit();
                        props.data();
                      }}
                    >
                      เพิ่มข้อมูล
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

export default AddAddresspopup;
