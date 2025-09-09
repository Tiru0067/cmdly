import ImageSection from "./components/ImageSection";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="w-full h-dvh flex-center text-black bg-white dark:bg-onyx dark:text-white">
      <div className="w-4xl h-110 rounded-xl bg-gray-200 dark:bg-charcoal overflow-hidden flex">
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
