"use client";

import { data } from "@/assets/data";
import Header from "./Header";
import Search from "./Search";
import CardList from "./CardList";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  const increasePage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getUserList(input, nextPage);
  };

  const decreasePage = () => {
    const prevPage = Math.max(1, page - 1);
    setPage(prevPage);
    getUserList(input, prevPage);
  };

  const getUserList = async (input, page) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${input}&per_page=10000&page=${page}`
    );
    setData(response.data);
    // console.log(response.data);
  };

  return (
    <div className="flex flex-col gap-5 justify-center mx-auto p-4 my-10 max-w-[980px]">
      <Header />
      <Search
        setInput={setInput}
        setPage={setPage}
        input={input}
        page={page}
        getUserList={getUserList}
      />
      <CardList
        count={data.total_count}
        items={data.items}
        increasePage={increasePage}
        decreasePage={decreasePage}
      />
    </div>
  );
};
export default App;
