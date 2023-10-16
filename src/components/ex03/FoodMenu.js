// export const FoodMenu = ({ week, breakfask, lunch, dinner }) => {
export const FoodMenu = ({ menu }) => {
  return (
    <>
      {/* <h2>{week}</h2>
      <h3>아침 : {breakfask}</h3>
      <h3>점심 : {lunch}</h3>
      <h3>저녁 : {dinner}</h3>
      <hr />

      <h2>{week}</h2>
      <h3>아침 : {week}</h3>
      <h3>점심 : {lunch}</h3>
      <h3>저녁 : {dinner}</h3>
      <hr />

      <h2>{week}</h2>
      <h3>아침 : {week}</h3>
      <h3>점심 : {lunch}</h3>
      <h3>저녁 : {dinner}</h3>
      <hr /> */}

      <h2>{menu[0].week}메뉴</h2>
      <h3>아침 : {menu[0].breakfast}</h3>
      <h3>점심 : {menu[0].lunch}</h3>
      <h3>저녁 : {menu[0].dinner}</h3>
      <hr />

      <h2>{menu[1].week}메뉴</h2>
      <h3>아침 : {menu[1].breakfast}</h3>
      <h3>점심 : {menu[1].lunch}</h3>
      <h3>저녁 : {menu[1].dinner}</h3>
      <hr />
    </>
  );
};
