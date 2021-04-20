import { List } from "./List";
import { useState } from 'react';

function App() {
  const [description, setDescription] = useState('クリック前の表示');
const changeDescription = () => {
  setDescription('クリック後の表示')
}

  return (
    <div>ゼロから始めるReact入門
      { description }
      <List title = "取扱言語一覧" />
      <button onClick={ changeDescription }>button</button>
    </div>
  );
}

export default App;
