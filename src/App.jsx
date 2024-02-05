/* eslint-disable no-unused-vars */
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="FitHub AI based Fitness App"
        description="Welcome to our fitness app! We are dedicated to helping you achieve your
        fitness goals through innovative features and personalized
        recommendations."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart Camera Feature"
        description=" Our smart camera feature allows you to click or upload a photo of any
        gym machine, and it will provide information on how to use the machine,
        its benefits, and recommend exercises you can perform using it."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="FitHub is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the app"
        description="Explore our app's smart camera feature, personalized diet recommendations, and customized exercise routines to optimize your fitness journey."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      {/* <Download /> */}

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with 💖 by{' '}
          <a
            href="https://github.com/FALAK097/FitnessApp"
            target="_blank"
            rel="noreferrer"
            className="bold">
            FitHub Team
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
