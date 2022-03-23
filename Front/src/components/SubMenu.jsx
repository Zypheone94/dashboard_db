import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import '../styles/SubMenu.scss'

const SubMenu = ({svg, url, menuName, subs}) => {

    var location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [menuColor, setMenuColor] = useState('')

    useEffect(() => {
        if(isOpen == true){
          if(window.location.pathname === url) { 
              setMenuColor('#009099')
            }
          else { 
              setMenuColor('#1D242E')
            }
        }
        else{
          if(window.location.pathname === url) { setMenuColor('#009099')}
          else { setMenuColor('#283342')}
        }
      }, [location])
    
      const openMenu = () => {
        setIsOpen(!isOpen)
        if(isOpen == true){
            if(window.location.pathname === url) {
                setMenuColor('#009099')
            }
            else {
                setMenuColor('#283342')
            }
        }
        else{
            if(window.location.pathname === url) { 
                setMenuColor('#009099')
            }
            else { 
                setMenuColor('#1D242E')
            }
        }
      }

  return (
    <>
        <div className="link_router">
            {svg}
            <NavLink end to={url} className="link" style={{
            backgroundColor : menuColor
            }}>
            {menuName}
            </NavLink>
            <div className="buttonMenu" onClick={openMenu} style={{
                transform: isOpen ? 'scaleY(-1)' : 'none'
            }}>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z" fill="white"/>
            </svg>
            </div>
        </div>

        {
            isOpen ? 
            <>
                {subs.map((sub) => 
                    <div className="link_router sub-menu">
                        <NavLink to={sub.url} className="link">
                        {sub.name}
                        </NavLink>
                    </div>
                )}
            </>
        :
            <>
                {subs.map((sub) => 
                    <div className="link_router sub-menu inactive">
                        <NavLink to={sub.url} className="link">
                        {sub.name}
                        </NavLink>
                    </div>
                )}
            </>
        }
    </>
  )
}

export default SubMenu