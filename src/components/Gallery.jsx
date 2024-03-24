import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const {data, setData} = useContext(MyContext)
  const handleClick = (index) => {
    const updatedData = data.photos.map((element, i) => {
      if (i === index) {
        return {
          ...element,
          liked: !element.liked
        }
      } else {
        return element
      }
    })
    setData({ ...data, photos: updatedData })
  }


  return (
  
  <div className="gallery grid-columns-5 p-3">
    {
      data.photos.map((element, index) => {

        return(
            <div key={index} onClick={() => handleClick(index)}>
              <IconHeart filled={element.liked}/>
              <img src={element.src.tiny} alt={element.alt}></img>
              <p>{element.alt}</p>
            </div>
        )
      })
    }
  </div>
  ) 
};
export default Gallery;
