export function Footer({ pageno, setPageNo, totalpages }) {
  function nextClick() {
    pageno < 6 ? (pageno = pageno + 1) : pageno;
    setPageNo(pageno);
  }

  function prevClick() {
    pageno > 1 ? (pageno = pageno - 1) : pageno;
    setPageNo(pageno);
  }

  return (
    <div>
      {pageno === 1 ? (
        <button onClick={nextClick}>next</button>
      ) : pageno === totalpages ? (
        <button onClick={prevClick}>prev</button>
      ) : (
        <>
          <button onClick={nextClick}>next</button>
          <button onClick={prevClick}>prev</button>
        </>
      )}
      {pageno}
    </div>
  );
}
