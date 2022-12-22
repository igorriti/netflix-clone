import ListItem from '../listItem/ListItem';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import './list.scss';
import { useRef, useState } from 'react';

export const List = ({list}) => {
    
    const[slideNumber,setSlideNumber] = useState(0);
    const[isMoved,setIsMoved] = useState(false);
    const [clickLimit,setClickLimit] = useState(window.innerWidth /230)


    const listRef = useRef()
    const handleClick = (direction) =>{
        let distance = listRef.current.getBoundingClientRect().x -50;

        if(direction === "left" && slideNumber >0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 +distance}px)`
        }
        if(direction === "right" && slideNumber < 10 - clickLimit){
            setSlideNumber(slideNumber+1);

            listRef.current.style.transform = `translateX(${-230 +distance}px)`
        }
        
        if (slideNumber>= 0){
            setIsMoved(true)
        }else {setIsMoved(false)}
        
    }

return <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className='separate'></div>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}
            style={{ display: !isMoved && "none" }}
            />
            <div className="container" ref={listRef}>
                {list.content.map((item,i) =>(
                    <ListItem index={i} item={item} key={item.content} />  
                ))}
        </div>
            <ArrowForwardIosOutlined className='sliderArrow right'onClick={()=>handleClick("right")}/>
        </div>
    </div>;};
