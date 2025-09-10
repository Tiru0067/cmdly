import ImageSection from "./components/ImageSection";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="w-full h-dvh flex-center text-black bg-white dark:bg-onyx dark:text-white lg:p-10">
      <div className="w-full h-full lg:max-w-5xl lg:h-125 max-md:max-w-full lg:rounded-xl bg-gray-200 dark:bg-charcoal overflow-hidden flex flex-col lg:flex-row transition-all duration-500">
        {/* left */}
        <ImageSection />

        {/* right */}
        <div className="w-full h-full p-5">
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;
