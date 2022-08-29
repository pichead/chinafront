import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";
//ICON
import { GiPoloShirt } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FcElectricity } from "react-icons/fc";

const CategoryProduct2 = ({ updateProductCategory }) => {
  const router = useRouter();

  // const removeSearchTerm = () => {
  //     router.push({
  //         pathname: "/products",
  //     });
  // };

  const selectCategory = (e, category) => {
    e.preventDefault();
    // removeSearchTerm();
    // updateProductCategory(category);
    router.push({
      pathname: "/products",
      query: {
        search: category, //
      },
    });
  };
  return (
    <>
      <ul>
        <li onClick={(e) => selectCategory(e, "shirt")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-shirt.svg" alt="" />
            เสื้อ
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "bag")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-bag.svg" alt="" />
            {/* <GiGymBag style={{ fontSize: 27 }} /> */}
            กระเป๋า
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "sport")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-sport.svg" alt="" />
            กีฬา{" "}
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "electrical appliance")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-elec.svg" alt="" />
            เครื่องใช้ไฟฟ้า
          </a>
        </li>
        <li onClick={(e) => selectCategory(e, "headphone")}>
          <a>
            <img src="/assets/imgs/theme/icons/icon-headphone2.svg" alt="" />
            หูฟัง
          </a>
        </li>
      </ul>
    </>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);
