import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'




const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', "Sale", "지속가능성"]
    const navigate = useNavigate()
    const goToLogin = ()=>{
        navigate('/login')
    }
    const goToLogout = (event)=>{
        setAuthenticate(false);
        navigate('/')
        console.log("로그아웃?",setAuthenticate)
    }
    const search = (event)=>{
        if (event.key === "Enter"){
            //1. 입력한 검색어를 읽어와서 2. url을바꿔줌
            let keyword = event.target.value 
            navigate(`/?q=${keyword}`) //파라미터값아닌 쿼리(추가적인 조건)

        }
    }
  return (
    <div>
        <div className='mobile-menu'>
            <div className='login-button' onClick={authenticate == false?goToLogin:(event)=>goToLogout(event)}>
                <FontAwesomeIcon className='login-icon' icon={faUser}/>
                {authenticate == true?"로그아웃":"로그인"}
            </div>
            <div className='search-box mobile-search'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <input type='text' placeholder='제품검색' onKeyPress={(event)=>search(event)}></input>
            </div>
        </div>
        <div className='nav-section'>
            <Link to="/"><img width="100px" src='https://www2.hm.com/hm-logo.png'></img></Link>
        </div>
        <div className='menu-area'>
            
                <ul className='menu-list'>
                    {menuList.map(menu=><li>{menu}</li>)} 
                    {/* 배열의 아이템을 li태그에 넣는다 */}
                </ul>
            
            <div className='search-box pc-search'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <input type='text' placeholder='제품검색' onKeyPress={(event)=>search(event)}></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar