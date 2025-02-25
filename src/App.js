import { LikeImg } from "./LikeImg";
import { MyIntro } from "./MyIntro";
import { MyMbti } from "./MyMbti";
import { MyName } from "./MyName";
import './App.css'

function App() {
  const name = "Junyoung";
  const word = "안녕하세요, 저는 코드잇에서 열심히 공부중입니다!";
  const mbti = "ISTJ";

  return (
    <div className="container">
      <h2>My Name</h2>
      <MyName name={name} />

      <h2>Introduction</h2>
      <MyIntro word={word} />

      <h2>My MBTI</h2>
      <MyMbti mbti={mbti} />

      <h2>Like Img</h2>
      <LikeImg />
    </div>
  );
}

export default App;
