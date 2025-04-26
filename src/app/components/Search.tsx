//실시간 검색어 추적할거면 CSR, 최종 결과만 띄울거면 SSR
const Search = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="여행지 검색" />
        <input type="text" placeholder="체크인" />
        <input type="text" placeholder="체크아웃" />
        <input type="text" placeholder="여행자" />
        <button>검색</button>
      </form>
    </>
  );
};

export default Search;
