import Body from './components/Body' 

import {Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
    <Link to="/body">body</Link>
    <Link to="/">Home</Link>
    <Link to="/">HomeTown</Link>
    <Link to="/">HomeGaon</Link>
          <Routes>
            <Route exact path='/body' element={<Body/>}></Route>
            {/* <Route path='/' element={}></Route> */}
          </Routes>
          
    <h1 className='ml-4 text-3xl font-bold underline animate-bounce hover:bg-red-500'>
      Hello world! Thanks for Using TailwindConfigure Package
    </h1>

    </div>
  );
}

export default App;