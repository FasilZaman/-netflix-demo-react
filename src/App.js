import React from 'react' 
import Navbar from './components/navbar/Navbar';
import './app.css'
import Banner from './components/banner/Banner';
import Rowpost from './components/rowpost/Rowpost';
import {originals,action,horror,documentaries,romance,comedy} from './urls'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={documentaries} title='Documentaries' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
