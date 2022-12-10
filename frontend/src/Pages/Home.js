import "../home.css";
import Intro from "../components/Intro";
import FeaturePost from "../components/FeaturePost";
import GoNext from "../components/GoNext";
import Slider from "../components/Slider";
import RelatedPost from "../components/RelatedPost";
import FormBlog from "./FormBlog"; 
import ProfileInput from "./ProfileInput";


function Home() {
  return (
    <div className="App">
      <Intro />
      <div className="list_post">
        <FeaturePost />
        
      </div>
      <GoNext />
      <Slider/>
      <RelatedPost />
      {/* <Province/> */}
    </div>
  );
}

export default Home;
