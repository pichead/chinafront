class storage {
  static set(key, cartItems) {
    // console.log("helllooooo");
    // console.log(key);
    // console.log(cartItems);
    localStorage.setItem(key, JSON.stringify(cartItems));
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default storage;
