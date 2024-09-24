
import './App.css';
// import pic1 from './component/assests/pic.avif'
import Header from './component/Header';
import Form from './component/Form'
import Footer from './component/Footer';

function App() {
  return (
    <div className="hero">
     <Header/>
     <Form heading="Give your Feedback here"/>
     <Footer/>
    </div>
  );
}

export default App;
