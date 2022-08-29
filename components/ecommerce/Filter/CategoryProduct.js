import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
  const router = useRouter();

  const selectCategory = (e, category) => {
    e.preventDefault();
    // removeSearchTerm();
    updateProductCategory(category);
    router.push({
      pathname: "/products",
      query: {
        cat: category, //
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
            <img src="/assets/imgs/theme/icons/icon-shirt.svg" alt="" />
            เสื้อ
          </a>
          {/* <span className="count">30</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "trousers")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-trouser.svg" alt="" />
            กางเกง
          </a>
          {/* <span className="count">35</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "bag")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-bag.svg" alt="" />
            กระเป๋า{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "health")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-health.svg" alt="" />
            สุขภาพ{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "sport")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-sport.svg" alt="" />
            กีฬา{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "decoration")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-decoration.svg" alt="" />
            ของตบแต่ง{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "electrical Appliance")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-elec.svg" alt="" />
            เครื่องใช้ไฟฟ้า{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "shoe")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-shoe.svg" alt="" />
            รองเท้า{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "computer")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-computer.svg" alt="" />
            คอมพิวเตอร์{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "headphone")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-headphone.svg" alt="" />
            หูฟัง{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
      </ul>
    </>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
