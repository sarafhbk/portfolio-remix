import AboutScreen from "~/screens/landing/AboutScreen";
import ContactScreen from "~/screens/landing/ContactScreen";
import LandingScreen from "~/screens/landing/LandingScreen";
import LanguagesISpeak from "~/screens/landing/Languages";

export default function Index() {
  return (
    <div className="wrapper h-full">
      <LandingScreen />
      <AboutScreen />
      <LanguagesISpeak />
      <ContactScreen />
    </div>
  );
}
