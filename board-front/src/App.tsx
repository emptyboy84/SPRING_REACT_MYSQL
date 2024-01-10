

import FavoriteItem from "components/FavoriteItem";
import { favoriteListMock } from "mocks";
import './App.css';

function App(){
  return (  
  // <>  
  //     <div style={{display:"flex",justifyContent:"center",gap:"24px"}}> 
  //       {top3BoradListMock.map(top3ListItem=><Top3Item top3ListItem={top3ListItem}/>)}
  //     </div>
  //     </>
  <div style={{padding:'0 20px',display:'flex',columnGap:'30px'}}>
       {favoriteListMock.map(favoriteListMock=><FavoriteItem favoriteListItem={favoriteListMock}/>)}

  </div>
  );
}
export default App;
