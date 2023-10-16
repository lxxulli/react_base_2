import { FoodMenu } from "./FoodMenu";
import { Intro } from "./Intro";

const foodMenus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "제육덮밥",
    dinner: "김치찌개",
  },
  {
    week: "화요일",
    breakfast: "쉐이크",
    lunch: "돈까스",
    dinner: "마라탕",
  },
  {
    week: "수요일",
    breakfast: "토스트",
    lunch: "김치볶음밥",
    dinner: "닭발",
  },
];

export const PropsEx = () => {
  return (
    <>
      {/* <Intro name={"이유리"} age={12} /> */}
      {/* <FoodMenu
        week={foodMenus[0].week}
        breakfast={foodMenus[0].breakfast}
        lunch={foodMenus[0].lunch}
        dinner={foodMenus[0].dinner}
      /> */}
      <FoodMenu menu={foodMenus} />
    </>
  );
};
