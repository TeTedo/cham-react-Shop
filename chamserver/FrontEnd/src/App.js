import { Routes, Route } from "react-router-dom";
import { Main, Shop, Travel, Auction, Game } from "./pages";
function App() {
  // 등급  A : 어드민 , C : 일반 고객 , S : shop판매자, T : 여행사, N : 경매인

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
