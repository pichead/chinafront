import { connect } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import { addToCart } from "../redux/action/cart";
import {
  clearWishlist,
  closeWishlistModal,
  deleteFromWishlist,
} from "../redux/action/wishlistAction";

const Wishlist = ({
  wishlist,
  clearWishlist,
  closeWishlistModal,
  deleteFromWishlist,
  addToCart,
}) => {
  const handleCart = (product) => {
    console.log(wishlist);
    addToCart(product);
    toast("Product added to Cart !");
  };
  return (
    <>
      <Layout parent="Home" sub="Shop" subChild="Wishlist">
        <section className="mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mb-40 m-auto">
                <h1 className="heading-2 mb-10">สินค้าที่คุณสนใจ</h1>
                <div className="d-flex justify-content-between">
                  <h6 className="text-body">
                    มีสินค้า &ensp;
                    <span className="text-brand">
                      {wishlist.items.length}
                    </span>{" "}
                    &ensp;สินค้าที่คุณสนใจ
                  </h6>
                </div>
              </div>
              <div className="col-xl-10 col-lg-12 m-auto">
                {wishlist.items.length > 0 ? (
                  <div className="table-responsive shopping-summery">
                    <table className="table table-wishlist">
                      <thead>
                        <tr className="main-heading">
                          <th
                            className="custome-checkbox start pl-30"
                            colSpan="2"
                          >
                            สินค้า
                          </th>
                          <th scope="col">ราคา</th>
                          <th scope="col">สถานะสินค้า</th>
                          <th scope="col">ตะกร้าสินค้า</th>
                          <th scope="col" className="end">
                            ลบสินค้า
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlist.items.map((product, i) => (
                          <tr className="pt-30" key={i}>
                            <td className="image product-thumbnail pt-40">
                              <img
                                src={product.pic_url}
                                alt=""
                                className="img-fluid"
                              />
                            </td>

                            <td className="product-des product-name">
                              <h6 className="product-name  mb-10">
                                <a>{product.title}</a>
                              </h6>
                              <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{
                                      width: "90%",
                                    }}
                                  ></div>
                                </div>
                                <span className="font-small ml-5 text-muted">
                                  {" "}
                                  (4.0)
                                </span>
                              </div>
                            </td>
                            <td className="price" data-title="Price">
                              <h3 className="text-brand">${product.price}</h3>
                            </td>
                            <td
                              className="text-center detail-info"
                              data-title="Stock"
                            >
                              {product.stock === 0 ? (
                                <span className="stock-status out-stock mb-0">
                                  Out of stock
                                </span>
                              ) : (
                                <span className="stock-status in-stock mb-0">
                                  In Stock
                                </span>
                              )}
                            </td>
                            <td className="text-right" data-title="Cart">
                              {product.stock === 0 ? (
                                <button className="btn btn-sm btn-secondary">
                                  Contact Us
                                </button>
                              ) : (
                                <button
                                  className="btn btn-sm"
                                  onClick={(e) => handleCart(product)}
                                >
                                  เพิ่มในตะกร้าสินค้า
                                </button>
                              )}
                            </td>
                            <td className="action" data-title="Remove">
                              <a
                                onClick={(e) =>
                                  deleteFromWishlist(product.num_iid)
                                }
                              >
                                <i className="fi-rs-trash"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-right">
                      <span className="clear-btn" onClick={clearWishlist}>
                        Clear All
                      </span>
                    </div>
                  </div>
                ) : (
                  <h4 className="mb-0">No Products</h4>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = {
  closeWishlistModal,
  deleteFromWishlist,
  clearWishlist,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
