import { useEffect, useState } from "react";
import "./App.css";
import MemeList from "./components/MemeList";

function App() {
  const [memeList, setMemeList] = useState([]);
  const [randomList, setRandomList] = useState([]);

  useEffect(() => {
    async function fetchMemeList() {
      try {
        const requestUrl = "https://api.imgflip.com/get_memes";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;
        setMemeList(data.memes);
        setRandomList([...Array(12)].map((item, index) => index));
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMemeList();
  }, []);

  function randomClick() {
    let randoms = [];
    while (randoms.length < 12) {
      let index = Math.floor(Math.random() * memeList.length);
      if (!randoms.includes(index)) {
        randoms.push(index);
      }
    }
    setRandomList(randoms);
  }

  return (
    <div className="App">
      <div className="title">MEME LIST</div>
      <button type="button" className="random-button" onClick={randomClick}>
        Random
      </button>
      <MemeList memes={memeList} randoms={randomList}></MemeList>
    </div>
  );
}

export default App;
