import { useEffect, useState } from "react";
import Background from "./Component/Background/Background";
import Navbar from "./Component/Navbar/Navbar.jsx"
import Hero from "./Component/Hero/Hero.jsx";
const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"Give in to",text2:"your passion"},
  ]
  const [heroCount, setHeroCount]=useState(0);
  const [playStatus, setPlayStatus]= useState(false);
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App