

import InputBox from 'components/InputBox';
import { useState } from 'react';
import './App.css';
function App(){
  const [value,setVlue]=useState<string>('');
  return (  
  // <>  
  //     <div style={{display:"flex",justifyContent:"center",gap:"24px"}}> 
  //       {top3BoradListMock.map(top3ListItem=><Top3Item top3ListItem={top3ListItem}/>)}
  //     </div>
  //     </>
  // <div style={{padding:'0 20px',display:'flex',columnGap:'30px',rowGap:'20px'}}>
  //      {favoriteListMock.map(favoriteListMock=><FavoriteItem favoriteListItem={favoriteListMock}/>)}

  // </div>
  <>
  <InputBox label='email' type='text' placeholder='input email' value={value} error={false} setValue={setVlue}
  message=''/> 
  </>
  );
}
export default App;
