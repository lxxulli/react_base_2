const users = [
  {
    id: 0,
    name: "이유리",
    age: 12,
  },
  {
    id: 1,
    name: "이가원",
    age: 12,
  },
  {
    id: 2,
    name: "이현지",
    age: 13,
  },
];

export const IntroEx = () => {
  return (
    <>
      <div>
        {users.map((man) => (
          <div key={man.id}>
            <h2>자기소개</h2>
            <h3>이름 : {man.name}</h3>
            <h3>나이 : {man.age}</h3>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};
