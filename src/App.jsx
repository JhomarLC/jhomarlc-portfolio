import AboutMe from "./Components/AboutMe";
import Clients from "./Components/Clients";
import ContactMe from "./Components/ContactMe";
import Headers from "./Components/Headers";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import stats from "./data/stats";

function App() {
	return (
		<>
			<Headers />
			<HeroSection />
			<Clients stats={stats} />
			<AboutMe />
			<Projects />
			<ContactMe />
		</>
	);
}

export default App;
