// import fetch from 'isomorphic-unfetch'
import filterProductList from "../../util/filterProduct";
import searchItemsByText from "../../util/searchItemsByText";
import * as Types from "../constants/actionTypes";

// Fetch Product fetchProduct
export const fetchProduct = (searchTerm, filters) => async (dispatch) => {
  console.log(searchTerm);
  var text = undefined;
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
  try {
    if (searchTerm !== text) {
      const apiurl = `https://api.openchinaapi.com/v1/taobao/products/?&q=${searchTerm}&page_size=100`;
      const sendRequest = await fetch(apiurl, requestOptions);
      const data = await sendRequest.json();
      text = searchTerm;
      console.log("log1");
      dispatch({
        type: Types.FETCHED_PRODUCT,
        payload: { products: data.data.item },
      });
    } else if (filters.category) {
      const apiurl = `https://api.openchinaapi.com/v1/taobao/products/?&q=${filters.category}&page_size=100`;
      const sendRequest = await fetch(apiurl, requestOptions);
      const data = await sendRequest.json();
      console.log("log2");
      // console.log(data.data.item);
      dispatch({
        type: Types.FETCHED_PRODUCT,
        payload: { products: data.data.item },
      });
    } else {
      console.log("DATA = ''");
      const apiurl = `https://api.openchinaapi.com/v1/taobao/products/?&q=?&page_size=100`;
      const sendRequest = await fetch(apiurl, requestOptions);
      const data = await sendRequest.json();
      console.log("log3");
      dispatch({
        type: Types.FETCHED_PRODUCT,
        payload: { products: data.data.item },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch More Product
export const fetchMoreProduct = (url, total) => async (dispatch) => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();

    // const searchedItems = searchItemsByText(searchTerm,data)
    // const filteredList  = filterProductList(searchedItems,filters)

    dispatch({
      type: Types.FETCHED_MORE_PRODUCT,
      payload: { products: data, total },
    });
  } catch (error) {
    console.log(error);
  }
};

// Fetch Product By Catagory

export const fetchByCatagory = async (url, filters) => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();
    const filteredList = filterProductList(data, filters);

    return filteredList;
  } catch (error) {
    console.log(error);
  }
};
