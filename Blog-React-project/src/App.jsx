import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import { Spinner } from "./components/Spinner";

function App() {
  let { fetchData, pageno, totalpages, posts, setPageNo, loading } =
    useContext(AppContext);

  useEffect(() => {
    fetchData(pageno);
  }, [pageno, setPageNo]);

  return (
    <div>
      {loading ? <Spinner></Spinner> : <Content posts={posts}></Content>}

      <Footer
        pageno={pageno}
        setPageNo={setPageNo}
        totalpages={totalpages}
      ></Footer>
    </div>
  );
}

export default App;
