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
import Envatomarket from './component/navMenu/Envatomarket';
// import aboutuslogo from '../src/Aboutus.jpg'

function App() {
  return (
    <div >
    {/* <Envatomarket></Envatomarket> */}
      <Navbar></Navbar>
      <MediaCard></MediaCard>
      <Feature></Feature>
      <AvatarUpload></AvatarUpload>
      <StudentFeedback></StudentFeedback>
     
      <Footertwo></Footertwo>
      
      {/* </div> */}
      
      
      
    </div>
  );
}

export default App;
