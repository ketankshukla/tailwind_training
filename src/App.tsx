import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import myImage from "/ketan-profile-photo.jpg"
import Training from "./components/Training.tsx";

const App = () => (
  <>
    <Header headerText="Ketan Shukla" bgColor="bg-emerald-800" boldOrNot={true}/>
    <Header headerText="Ketan Shukla" bgColor="bg-emerald-800"/>
    <Card
        image={myImage}
        name="Ketan Shukla"
        title="Next.Js and React Developer"
        description="I am a full stack developer with a focus on front end development.
    I have experience with React, Next.js, and Tailwind CSS. I am also
    familiar with Node.js, Express, and MongoDB. I am passionate about
    creating beautiful and functional web applications."
    />
    <Footer footerText="Copyright 2004"/>
    <Training/>
  </>
)

export default App;




