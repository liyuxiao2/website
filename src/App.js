import './components/App.css';
import Header from './components/featurePage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCTE1jo-MFUzwEjJfKjNXTKw4XuAayfms8",
  authDomain: "liyuxiao-s-website.firebaseapp.com",
  projectId: "liyuxiao-s-website",
  storageBucket: "liyuxiao-s-website.appspot.com",
  messagingSenderId: "883583350985",
  appId: "1:883583350985:web:c171d3e322bf007ecdb518",
  measurementId: "G-1ZNC99PSSM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className='App-header'>
      <h1> Liyu Xiao's Tutoring Service </h1> 
      <Header/>
    </div>
  );
}

export default App;
