import Home from './pages/Home';
import Details from './pages/Detials';
import Layout from './components/layout';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App = () => {
  
  return (
  
    // router page

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route  index element={<Home/>} />

       <Route path='/:slug' element={<Details/>}>
       
       </Route>

      </Route>


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
