// grabs all images from the folder
const imageModules = import.meta.glob("../assets/Images/*", { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);

const ImageSection = () => {
  const randomImage = images[Math.ceil(Math.random() * images.length - 1)];

  return (
    <div
      className="w-full h-[40%] lg:max-w-80 lg:h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${randomImage})` }}
    ></div>
  );
};

export default ImageSection;
