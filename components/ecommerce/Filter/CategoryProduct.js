import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
  const router = useRouter();

  const selectCategory = (e, category) => {
    e.preventDefault();
    // removeSearchTerm();

    //ปิดแล้วจะทำให้คนหาเจอ
    // updateProductCategory(category);
    router.push({
      pathname: "/products",
      query: {
        search: category,
        cat: category,
      },
    });
  };
  return (
    <>
      <ul>
        <li onClick={(e) => selectCategory(e, "")}>
          <a>ทั้งหมด</a>
        </li>
        <li onClick={(e) => selectCategory(e, "shirt")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-1.svg" alt="" />
            เสื้อ
          </a>
          {/* <span className="count">30</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "trousers")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-2.svg" alt="" />
            กางเกง
          </a>
          {/* <span className="count">35</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "bag")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            กระเป๋า{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "health")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            สุขภาพ{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "sport")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            กีฬา{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "decoration")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            ของตบแต่ง{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "electrical Appliance")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            เครื่องใช้ไฟฟ้า{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "shoe")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            รองเท้า{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "hot")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            กำลังฮิต{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "computer")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            คอมพิวเตอร์{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "headphone")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            หูฟัง{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
      </ul>
    </>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
