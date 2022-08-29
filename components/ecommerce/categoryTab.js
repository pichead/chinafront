import React, { useEffect, useState } from "react";
import { server } from "../../config/index";
import Cat1Tab from "../elements/FeaturedTab";
import Cat2Tab from "../elements/NewArrivalTab";
import Cat3Tab from "../elements/TrendingTab";
import Link from "next/link";

function CategoryTab() {
  const [active, setActive] = useState("1");
  const [catAll, setCatAll] = useState([]);
  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [cat3, setCat3] = useState([]);
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [test, setTest] = useState(true);

  // FIX
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 64d0edbc8c468b49213291016c010f9c306d1b0b"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const catPAll = async (id) => {
    const request = await fetch(
      `http://localhost:3001/products/?&q=hot&page=${id}`,
      requestOptions
    );
    const allProducts = await request.json();
    setCatAll(allProducts.data.item);
    setActive("1");
  };

  // const catP1 = async (id) => {
  //   const request = await fetch(
  //     ` https://api.openchinaapi.com/v1/taobao/products/?&q=hot&is_promotion=1&page=${id}`,
  //     requestOptions
  //   );
  //   const allProducts = await request.json();
  //   setCat1(allProducts.data.item);
  //   setActive("2");
  // };

  // const catP2 = async (id) => {
  //   const request = await fetch(
  //     `http://localhost:3001/products/?q=new&page=${id}`,
  //     requestOptions
  //   );
  //   const allProducts = await request.json();
  //   setCat2(allProducts.data.item);
  //   setActive("3");
  // };

  useEffect(() => {
    catPAll(1);
  }, []);

  return (
    <>
      <div
        id="producttest"
        className="section-title style-2 wow animate__animated animate__fadeIn "
      >
        <h3>สินค้าทั้งหมด</h3>
      </div>

      <div className="tab-content wow fadeIn animated">
        <div>
          {catAll.length !== 0 ? (
            <div>
              <div className="product-grid-4 row">
                <Cat1Tab products={catAll} />
              </div>
              <div className="pagination-area mt-20 mb-20 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    {page.map((item, i) => (
                      <div key={i}>
                        <li
                          className="page-item"
                          onClick={(e) => {
                            catPAll(item);
                          }}
                        >
                          <a className="page-link" href="#producttest">
                            {item}
                          </a>
                        </li>
                      </div>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          ) : (
            <div className="text-center mt-200 mb-200">
              <h5 className="lead mb-4">โปรดรอสักครู่</h5>
              <img src="/assets/imgs/theme/shobship-gif4.png" alt="" />
            </div>
          )}
        </div>

        {/* <div
          className={
            active === "2" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <Cat1Tab products={cat1} />
          </div>
          <div className="pagination-area mt-20 mb-20">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fi-rs-arrow-small-left"></i>
                  </a>
                </li>
                {page.map((item, i) => (
                  <div key={i}>
                    <li
                      className="page-item"
                      onClick={(e) => {
                        catP1(item);
                      }}
                    >
                      <a className="page-link" href="#producttest">
                        {item}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={
            active === "3" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <Cat3Tab products={cat2} />
          </div>
          <div className="pagination-area mt-20 mb-20">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fi-rs-arrow-small-left"></i>
                  </a>
                </li>
                {page.map((item, i) => (
                  <div key={i}>
                    <li
                      className="page-item"
                      onClick={(e) => {
                        catP2(item);
                      }}
                    >
                      <a className="page-link" href="#producttest">
                        {item}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>
            </nav>
          </div>
        </div>
         */}
      </div>
    </>
  );
}
export default CategoryTab;
