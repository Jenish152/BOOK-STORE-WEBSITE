
import './App.css';
import { Navbar } from './component/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Register } from './component/Register';
import Gridbox from './component/Gridbox';
import Custometheme from './component/Customtheme';
import {ThemeProvider,createTheme} from "@material-ui/core";
//custom theme
const myTheme=createTheme({
  palette:{
    primary:{
      main:"#E75480"
    },
    secondary:{
      main:"#006400"
    }
  }
})

//DAY 2: use of component so use component like about,Contact,Register and use of props
function App() {
  return (
    <>
    <ThemeProvider theme={myTheme}>
      
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/register" element={<Register/>}></Route>
    <Route exact path="/grid" element={<Gridbox/>}></Route>
    <Route exact path="/custom" element={<Custometheme/>}></Route>
    <Route exact path="/contact" element={<Contact mail="jenish123@gmail.com"/>}></Route>
    </Routes>
    </Router>
    </ThemeProvider>
        </>
  );
}

export default App;
