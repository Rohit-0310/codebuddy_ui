import React, { useState } from 'react'
import css from '../style/styles.css';




const HomePage = () => {

    const [hamburger, setHamburger] = useState(false);
    const [overflow, setOverflow] = useState(false);
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(4)

    const open = () => {
        setHamburger(hamburger?false:true);
    }

    const over = () => {
        setOverflow(overflow?false:true);
    }


    const array = [
        { id: 1  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUmjE.img&ehk=ZkHIgi1Q7JXg48yali9yxF6CI%2bkVjeuLa04cKVkhs9M%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 2  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAOqdRT.img&ehk=636XriGOzm3vefjjXu3Qe%2fz7ouKDqgaqBVrC4atXefA%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 3  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUmjE.img&ehk=ZkHIgi1Q7JXg48yali9yxF6CI%2bkVjeuLa04cKVkhs9M%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 4  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAOqdRT.img&ehk=636XriGOzm3vefjjXu3Qe%2fz7ouKDqgaqBVrC4atXefA%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 5  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAANQ0gH.img&ehk=uE%2fK8SyNxDwXUL13dXRdpNyQTgEVgw5qyOKgedb5bWI%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 6  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAANQ0gH.img&ehk=uE%2fK8SyNxDwXUL13dXRdpNyQTgEVgw5qyOKgedb5bWI%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 7  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAANQ0gH.img&ehk=uE%2fK8SyNxDwXUL13dXRdpNyQTgEVgw5qyOKgedb5bWI%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 8  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUuwn.img&ehk=PlhVNr%2bJ7n%2fEZCyssqRDKNS6ll92kzB1oAsREUlsXdY%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0" , heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 9  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUuwn.img&ehk=PlhVNr%2bJ7n%2fEZCyssqRDKNS6ll92kzB1oAsREUlsXdY%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 10 ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUuwn.img&ehk=PlhVNr%2bJ7n%2fEZCyssqRDKNS6ll92kzB1oAsREUlsXdY%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0" , heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 11  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUu3j.img&ehk=hviJy3XudgHoueubuTVIrRCqfm74wb6VYu4eDwj72Ko%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 12  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUu3j.img&ehk=hviJy3XudgHoueubuTVIrRCqfm74wb6VYu4eDwj72Ko%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 13  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUu3j.img&ehk=hviJy3XudgHoueubuTVIrRCqfm74wb6VYu4eDwj72Ko%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 14 ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAULFoV.img&ehk=YVeKpe8VS6rQ3DKy7VT3L9B1X%2bP2K31VhBFatea6F8w%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 15  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAULFoV.img&ehk=YVeKpe8VS6rQ3DKy7VT3L9B1X%2bP2K31VhBFatea6F8w%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 16  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAULFoV.img&ehk=YVeKpe8VS6rQ3DKy7VT3L9B1X%2bP2K31VhBFatea6F8w%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 17  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAULFoV.img&ehk=YVeKpe8VS6rQ3DKy7VT3L9B1X%2bP2K31VhBFatea6F8w%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0" , heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 18  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUmjE.img&ehk=ZkHIgi1Q7JXg48yali9yxF6CI%2bkVjeuLa04cKVkhs9M%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0" , heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
        { id: 19  ,img: "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUmjE.img&ehk=ZkHIgi1Q7JXg48yali9yxF6CI%2bkVjeuLa04cKVkhs9M%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0", heading:"Hindustan Times", para: "Delhi is unlikely to see any respite from the prevailing heatwave for at least another week"},
    ]


    const list = array.slice(startPage,endPage)
            .filter((currElem) => {
                return currElem;
            })
            .map((data) => {
                return(
                    <div style={{backgroundColor:"#424242", borderRadius:"5px",marginRight:"3px", justifyContent:"space-between"}} key={data.id}>
                        <h2 style= {{textAlign: 'left', color: "white", marginLeft:"8px"}}>{data.heading}</h2>
                        <div style={{display:"flex"}}>
                            <img src={data.img} alt={data.heading}/>
                            <p style={{textAlign: 'left',marginLeft:"3px", color: "white"}}>{data.para}</p>
                        </div>
                    </div>
                )
            })


    const onclickHandle = (type) => {
        if(type === "left"){
            if(startPage ===0){
                setEndPage(4);
                setStartPage(0)
            } else {
                setStartPage(startPage - 3);
                setEndPage(endPage - 3);
            }
        }
        if(type === "right"){
            if(endPage === 20){
                setStartPage(array.length - 3);
                setEndPage(array.length + 1);
            } else {
                setStartPage(startPage + 3);
                setEndPage(endPage+3);
            }
        }
    }
  return (
    <div className="main">
        <div className="navbar">
            <div className="nav_1">
                <p className="logo_Style">
                    <img className="logo_Style" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Microsoft_Bing_logo.svg/2560px-Microsoft_Bing_logo.svg.png" alt="" />
                    {/* Microsoft Bing */}
                    </p>
                <p>Image</p>
                <p>Video</p>
                <p>Translate</p>
                <p onClick={over}>...</p>
            </div>
            <div className="over_style" style={{display:overflow?"block":"none"}}>
            <div>
                <p>Maps</p>
                <p>News</p>
                <p>Travel history</p>
                <p>MNS</p>
                <p>Esports</p>
                <p>takeLessons</p>
                <p>Office</p>
            </div>
        </div>

            <div className="nav_2">
                <p style={{alignItems: 'center'}}>Sign in </p>
                <p><span className="material-icons-outlined">account_circle</span></p>
                <p onClick={open}> <span className="material-icons-outlined">density_medium</span>
                </p>
            </div>
        </div>
        <div className="ham_style" style={{display:hamburger?"block":"none"}}>
            <div>
                <p>Setting</p>
                <p>SafeSearch</p>
                <p>Search history</p>
                <p>My Bing</p>
                <p>Privacy</p>
                <p>Feedback</p>
                <p>Customize your homepage</p>
                <p>show menu bar</p>
                <p>show news and interests</p>
                <p>show homepage image</p>
            </div>
        </div>
        <div className='search_box'>
            <input style={{flexGrow: 1,border: 'none', width:'350px'}} type="text"/>
            <button className='btn_search'>
                <span className="material-icons-outlined">mic_none</span>
            </button>
            <button className='btn_search'>
                <span className="material-icons-outlined">filter_center_focus</span>
            </button>
            <button className='btn_search'>
                <span className="material-icons-outlined">search</span>
            </button>
        </div>

        <div className='crousal_main'>
            <h1 className='arrow_style' onClick={() => onclickHandle("left")}> 
                <span className="material-icons-outlined">arrow_back_ios</span>
            </h1>
            <div className='crousal_style'> {list}</div>
            <h1 className='arrow_style' onClick={() => onclickHandle("right")}> 
                <span className="material-icons-outlined">arrow_forward_ios</span>
            </h1>
        </div>
    </div>
  )
}

export default HomePage