import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";
//ICON
import { GiTrousers } from "react-icons/gi";

const CategoryProduct3 = ({ updateProductCategory }) => {
  const router = useRouter();

  // const removeSearchTerm = () => {
  //     router.push({
  //         pathname: "/products",
  //     });
  // };

  const selectCategory = (e, category) => {
    e.preventDefault();
    // removeSearchTerm();
    updateProductCategory(category);
    console.log(category);
    router.push({
      pathname: "/products",
      query: {
        search: category,
      },
    });
  };
  return (
    <>
      <ul className="end">
        <li onClick={(e) => selectCategory(e, "trousers")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-trouser.svg" alt="" />
            กางเกง
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "health")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-health.svg" alt="" />
            สุขภาพ
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "decoration")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-decoration.svg" alt="" />
            ของตบแต่ง{" "}
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "shoe")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-shoe.svg" alt="" />
            รองเท้า
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "computer")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-computer.svg" alt="" />
            คอมพิวเตอร์
          </a>
        </li>
      </ul>
    </>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct3);
