import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import {Publish} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';


export default function Product() {
  const location = useLocation()
  const movie = location.state.movie;
  console.log(location);
  return <div className='product'>
      <div className="productTitleContainer">
          <h1 className="productTitle">Movie</h1>
          <Link to="/newProduct">
            <button className='productAddButton'>Create</button>
          </Link>
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={movie.img} alt="" className="productInfoImg" />
              <span className='productName'>{movie.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">Id:</span>
                <span className="productInfoValue">{movie._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Genre:</span>
                <span className="productInfoValue">{movie.genre}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Year:</span>
                <span className="productInfoValue">{movie.year}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Limit:</span>
                <span className="productInfoValue">{movie.limit}</span>
              </div>
            </div>
          </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Movie Title</label>
            <input type="text" placeholder={movie.title}/>
            <label htmlFor="">Year</label>
            <input type="text"  placeholder={movie.year}/>
            <label htmlFor="">Genre</label>
            <input type="text"  placeholder={movie.genre}/>
            <label htmlFor="">Limit</label>
            <input type="text"  placeholder={movie.limit}/>
            <label htmlFor="">Trailer</label>
            <input type="text"  placeholder={movie.trailer}/>
            <label htmlFor="">Video</label>
            <input type="text"  placeholder={movie.video}/>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" 
                  className="productUploadImg" />
              <label htmlFor="file"><Publish className='userUpdateIcon'/> Upload image</label>
              <input type="file" id='file' style={{display:"none"}}/>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
  </div>;
}
