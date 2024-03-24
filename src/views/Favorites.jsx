import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { data } = useContext(MyContext)

  const favoritePhotos = data.photos.filter((photo) => photo.liked)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
          favoritePhotos.map((photo, index) => {
            return (
            <div key={index}>
              <img src={photo.src.tiny} alt={photo.alt}/>
            </div>
          )})
        }
      </div>
    </div>
  );
};
export default Favorites;
