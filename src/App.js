import { ComEx01, ComEx02 } from "./components/ex02/ComEx01";
import FnComponentEx from "./components/ex02/FnComponentEx";
import { PropsEx } from "./components/ex03/PropsEx";
import { Internet } from "./components/ex04/Internet";
import { IntroEx } from "./components/ex04/IntroEx";
import { MapFnEx } from "./components/ex04/MapFnEx";
import { Ex05 } from "./components/ex05/Ex05";
import { Ex06 } from "./components/ex06/Ex06";
import { Ex07 } from "./components/ex07/Ex07";
import { Ex09 } from "./components/ex09/Ex09";
import { Ex10 } from "./components/ex10/Ex10";
import { Ex11 } from "./components/ex11/Ex11";
import { Ex12 } from "./components/ex12/Ex12";
import { Ex14 } from "./components/ex14/Ex14";
import { Ex15 } from "./components/ex15/Ex15";
import { Exex12 } from "./components/exEx12/Exex12";
import { Exex15 } from "./components/exEx15/Exex15";

const App = () => {
  return (
    <>
      {/* <div>
        <h3>오늘은 jsx에 대해서 배웠어요</h3>
      </div>
      <FnComponentEx />
      <ComEx01 />
      <ComEx02 /> */}
      {/* 2일차 */}

      {/* <PropsEx /> */}
      {/* 3일차 */}

      {/* <MapFnEx /> */}
      {/* <IntroEx /> */}
      {/* <Internet /> */}
      {/* 4일차 */}

      {/* <Ex05 /> */}

      {/* <Ex06 /> */}

      {/* <Ex07 /> */}

      {/* <Ex09 /> */}

      {/* <Ex10 /> */}

      {/* <Ex11 /> */}

      {/* <Ex12 /> */}
      {/* <Exex12 /> */}

      {/* <Ex14 /> */}

      {/* <Ex15 /> */}
      <Exex15 />
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
