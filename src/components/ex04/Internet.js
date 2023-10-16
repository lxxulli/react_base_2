const nets = [
  {
    id: 0,
    name: "네이버",
    url: "https://www.naver.com/",
  },
  {
    id: 1,
    name: "다음",
    url: "https://www.daum.net/",
  },
  {
    id: 2,
    name: "구글",
    url: "https://www.google.com/",
  },
];

export const Internet = () => {
  return (
    <>
      <h2>즐겨찾기</h2>
      {nets.map((net) => (
        <div key={net.id}>
          <a href={net.url}>{net.name}</a>
        </div>
      ))}
    </>
  );
};
