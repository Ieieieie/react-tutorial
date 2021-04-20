import { List } from "./List";
import { useState } from 'react';
import React from 'react';
// function App() {
//   const [description, setDescription] = useState('クリック前の表示');
// const changeDescription = () => {
//   setDescription('クリック後の表示')
// }

//   return (
//     <div>ゼロから始めるReact入門
//       { description }
//       <List title = "取扱言語一覧" />
//       <button onClick={ changeDescription }>button</button>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {description: 'クリック前の表示'}
  }
  changeDescription(){
    this.setState({
      description: 'クリック後の表示です'
    })
  }
  render(){
    const { description } = this.state;
    return(
      <div>クラスコンポーネントにしてみました<br/>
        {description}
        <List title="取扱言語一覧" />
        <button onClick ={() => this.changeDescription()}>button</button>
      </div>
    )
  }
}

export default App;
