import { ComEx01, ComEx02 } from "./components/ex02/ComEx01";
import FnComponentEx from "./components/ex02/FnComponentEx";
import { PropsEx } from "./components/ex03/PropsEx";

const App = () => {
  return (
    <>
      {/* <div>
        <h3>오늘은 jsx에 대해서 배웠어요</h3>
      </div>
      <FnComponentEx />
      <ComEx01 />
      <ComEx02 /> */}

      <PropsEx />
    </>
  );
};

export default App;

// *jsx문법 규칙
// - 태그가 2개 이상일 땐 반드시 부모태그로 닫아줘야됨

// *컴포넌트
// - 레이아웃과 비슷하게 디자인의 하나의 영역을 뜻함
// - 컴포넌트 제작 시 파일명과 함수명은 동일 해야되며, 첫글자는 대문자로 시작할 것
// - 컴포넌트 함수를 제작 후 내보내기 export를 해줘야 됨
// - 태그는 반드시 닫아줄 것

// *내보내기 불러오기
// - import (불러오기)
// - export (내보내기)
