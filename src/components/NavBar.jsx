import { FaSearch } from 'react-icons/fa'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const { menu, setMenu, count } = useGlobalContext()
  return (
    <nav>
      <div className="nav-container">
        <form>
          <div className="input-container">
            <FaSearch className="search" />
            <input
              type="text"
              className="form-field"
              placeholder="Search products"
            />
          </div>
        </form>
        <h2>
          <NavLink to="/" className="logo-text">
            FitGear Hub
          </NavLink>
        </h2>
        <FaBars className="menu" onClick={() => setMenu((prev) => !prev)} />
      </div>
      {/* divider */}
      <div
        className={
          menu ? 'navLike-listContainer' : 'navLike-listContainer hidden'
        }
      >
        <ul className="navLike-list">
          <li>
            <FaRegCircleQuestion />
            Help
            <button type="button">
              <RiArrowDropDownLine />
            </button>
          </li>
          <li className="cart">
            <IoCartOutline />
            Cart
            <span>{count}</span>
          </li>
        </ul>
        <div className="login-button-wrapper">
          <CgProfile />
          <button type="button">
            <a href="">log in</a>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar