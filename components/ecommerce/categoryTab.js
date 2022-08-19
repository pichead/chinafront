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
      `http://localhost:3001/products/?q=''&page=${id}`,
      requestOptions
    );
    const allProducts = await request.json();
    setCatAll(allProducts.data.item);
    setActive("1");
  };

  const catP1 = async () => {
    const request = await fetch(
      "http://localhost:3001/products/?q=''&page=2",
      requestOptions
    );
    const allProducts = await request.json();
    setCat1(allProducts.data.item);
    setActive("2");
  };

  const catP2 = async () => {
    const request = await fetch(
      "http://localhost:3001/products/?q=''&page=3",
      requestOptions
    );
    const allProducts = await request.json();
    // const cat2Item = allProducts.filter((item) => item.category == "shoe");
    setCat2(allProducts.data.item);
    setActive("3");
  };

  const catP3 = async () => {
    const request = await fetch(`${server}/static/product.json`);
    const allProducts = await request.json();
    const cat3Item = allProducts.filter((item) => item.category == "jacket");
    setCat3(cat3Item);
    setActive("4");
  };

  useEffect(() => {
    catPAll(1);
  }, []);

  return (
    <>
      <div
        id="producttest"
        className="section-title style-2 wow animate__animated animate__fadeIn"
      >
        <h3>All Products</h3>
        <ul className="nav nav-tabs links" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={active === "1" ? "nav-link active" : "nav-link"}
              onClick={catPAll}
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "2" ? "nav-link active" : "nav-link"}
              onClick={catP1}
            >
              Featured
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "3" ? "nav-link active" : "nav-link"}
              onClick={catP2}
            >
              Popular
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "4" ? "nav-link active" : "nav-link"}
              onClick={catP3}
            >
              New added
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content wow fadeIn animated">
        <div
          className={
            active === "1" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <Cat1Tab products={catAll} />
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

        <div
          className={
            active === "2" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <Cat1Tab products={cat1} />
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
        </div>
        {/* <div
          className={
            active === "4" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <Cat2Tab products={cat3} />
          </div>
        </div> */}
      </div>
    </>
  );
}
export default CategoryTab;
