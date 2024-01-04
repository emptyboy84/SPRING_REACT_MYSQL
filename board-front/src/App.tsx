

import Top3Item from "components/Top3Item";
import './App.css';

/*
 function App() {
   return(

    <div><BoardItem/></div>
   )
 }
exprot default App;
*/
// interface Props {
//   boardListItem: any;
// };

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const MyComponent: React.FC<Props> = ({ boardListItem }) => {
//   return <div>{boardListItem}</div>;
// };
// export default BoardListItem;

function App(){
  return (
    
      <div style={{display:"flex",justifyContent:"center",gap:"24px"}}> 
      <Top3Item/>
      <Top3Item/>
      <Top3Item/>
      </div>

  )
}
export default App;
