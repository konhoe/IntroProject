import crossBibleImg from './cross-bible-clip-art-holy-books-isolated_222243_wh1200.png';
import './LikeImg.css'; 

export const LikeImg = ({ text }) => {
  return (
    <img 
      className="like-img"  
      src={crossBibleImg} 
      alt={text} 
    />
  );
};
