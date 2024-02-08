import { createContext, useState } from "react";
import { url } from "./Url";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  let [loading, setLoading] = useState(true);
  let [pageno, setPageNo] = useState(1);
  let [totalpages, setTotalPages] = useState(0);
  let [posts, setPosts] = useState([]);

  async function fetchData(page = 1) {
    loading = true;
    setLoading(true);
    let result = await fetch(
      `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
    );

    try {
      result = await result.json();
      totalpages = result.totalPages;
      setTotalPages(totalpages);
      posts = result.posts;
      setPosts(posts);
      console.log(result);
      loading = false;
      setLoading(false);
    } catch (error) {
      window.alert("not working api");
    }
  }

  // function apiFetch(pageno) {
  //   setPageNo(pageno);
  //   fetchData(pageno);
  // }

  const value = {
    loading,
    setLoading,
    pageno,
    setPageNo,
    totalpages,
    setTotalPages,
    posts,
    setPosts,
    // apiFetch,
    fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
