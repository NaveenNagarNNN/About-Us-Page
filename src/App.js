import Navbar from './component/Navbar';
import './App.css';
import MediaCard from './component/Image';
import Footertwo from './component/Footertwo'
import logo from '../src/Logo.png';
import Logotry from './Logotry';
import Feature from './component/Feature';
import AvatarUpload from './component/Instructor';
import StudentFeedback from './component/StudentFeedback';
import Carousel from './component/Carousel';
// import aboutuslogo from '../src/Aboutus.jpg'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MediaCard></MediaCard>
      <div style={{position:'relative'}}>
      {/* <img style={{height:50,width: '400px',}} src={logo}></img> */}
      <Feature></Feature>
      <AvatarUpload></AvatarUpload>
      <StudentFeedback></StudentFeedback>
     
      <Footertwo></Footertwo>
      
      </div>
      
      
      
    </div>
  );
}

export default App;
