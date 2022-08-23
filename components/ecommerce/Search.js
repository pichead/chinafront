import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    console.log("click");
    router.push({
      pathname: "/products/",
      query: {
        search: searchTerm,
      },
    });
    setSearchTerm("");
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <>
      <form>
        <select className="select-active">
          <option>ประเภท</option>
          <option>เสื้อ</option>
          <option>กางเกง</option>
          <option>กระเป๋า</option>
          <option>สุขภาพ</option>
          <option>กีฬา</option>
          <option>ของตบแต่ง</option>
          <option>เครื่องใช้ไฟฟ้า</option>
          <option>รองเท้า</option>
          <option>กำลังฮิต</option>
          <option>คอมพิวเตอร์</option>
          <option>หูฟัง</option>
        </select>
        <input
          value={searchTerm}
          onKeyDown={handleInput}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="พิมพ์คำค้นหาสินค้าที่ต้องการ"
        />
      </form>
    </>
  );
};

export default Search;
