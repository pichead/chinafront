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
        search: category, //
      },
    });
  };
  return (
    <>
      <ul>
        <li onClick={(e) => selectCategory(e, "")}>
          <a>All</a>
        </li>
        <li onClick={(e) => selectCategory(e, "shirt")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-1.svg" alt="" />
            Shirt
          </a>
          {/* <span className="count">30</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "trousers")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-2.svg" alt="" />
            Trousers
          </a>
          {/* <span className="count">35</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "bag")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Bag{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "health")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Health{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "sport")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Sport{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "decoration")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Decoration{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "electrical Appliance")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Electrical Appliance{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "shoe")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Shoe{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "hot")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Hot{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "computer")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Computer{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
        <li onClick={(e) => selectCategory(e, "headphone")}>
          <a>
            <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />
            Headphone{" "}
          </a>
          {/* <span className="count">42</span> */}
        </li>
      </ul>
    </>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
