import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.scoped.css";
import logo from "../asset/logo.png";
import icon_home from "../asset/home_icon.png";
import icon_shop from "../asset/cart_icon.png";
import icon_bag from "../asset/shoppingbag_icon.svg";
import icon_favorite from "../asset/favorite_icon.png";
import icon_profile from "../asset/profile_icon.png";
import cart from "../asset/shopping chart.png";
import notif from "../asset/notif.png";
import mail from "../asset/mail.png";
import profile from "../asset/profile.png";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import ActionUsers from "../../stores/actions/users"

const Navigasi = (props) => {
    const {isAuth} = useSelector((state) => state.users)
    const Dispatch = useDispatch()
    const {data} = useSelector((state) => state.users)
    const logout = () => {
        Dispatch(ActionUsers.AuthClear())
    }

    // let isAuth = true
    if (isAuth === true && data.role === 'admin') {
        return (
            <header className="mx-auto">
                <nav className="bg-light d-md-block d-none navbar shadow-sm fixed-top">
                    <div className="container justify-content-between align-items-center">
                        <Link to='/'>
                            <div className="navbar-brand" href="#home">
                                <img src={logo} alt="" height="35px" width="auto" />
                            </div>
                        </Link>
                        
                        <div className="col-4 text-end d-flex justify-content-end align-items-center">
                            {/* <Link to='/bag'>
                                <div>
                                    <img className="me-3" src={cart} alt="" />
                                </div>
                            </Link> */}
                            <div>
                                <img className="me-3" src={notif} alt="" />
                            </div>
                            <div>
                                <img className="me-3" src={mail} alt="" />
                            </div>
                            <div className="dropdown">
                                <img className="me-3 profile-btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={profile} alt="" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/profile/myproduct' className='ml-2'>Profile Page</Link> <br />
                                <Link to='/' className='ml-2' onClick={logout}>Log Out</Link>
                                </div>
                            </div>
                            {/* <Link to='/profile/myproduct'>
                                <div>
                                    <img className="me-3" src={profile} alt="" />
                                </div>
                            </Link> */}

                        </div>
                    </div>
                </nav>
                <nav className="bg-light d-md-none d-block navbar shadow-sm fixed-top">
                    <div className="container justify-content-center align-items-center">
                        <a className="navbar-brand" href="./home.html">
                            <img src={logo} alt="" height="35px" width="auto" />
                        </a>
                    </div>
                </nav>
                <nav className="d-md-none d-block navbar bg-light shadow-sm navbar-bottom fixed-bottom">
                    <ul className="nav d-flex justify-content-around">
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_home}
                                    alt=""
                                />
                                <span className="nav-title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_shop}
                                    alt=""
                                />
                                <span className="nav-title">Shop</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_bag}
                                    alt=""
                                />
                                <span className="nav-title">Bag</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_favorite}
                                    alt=""
                                />
                                <span className="nav-title">Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_profile}
                                    alt=""
                                />
                                <span className="nav-title">Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    } else if (isAuth === true && data.role === 'member') {
        return (
            <header className="mx-auto">
                
                <nav className="bg-light d-md-block d-none navbar shadow-sm fixed-top">
                    <div className="container justify-content-between align-items-center">
                        <Link to='/'>
                            <div className="navbar-brand" href="#home">
                                <img src={logo} alt="" height="35px" width="auto" />
                            </div>
                        </Link>
                        
                        <div className="col-4 text-end d-flex justify-content-end align-items-center">
                            <Link to='/bag'>
                                <div>
                                    <img className="me-3" src={cart} alt="" />
                                </div>
                            </Link>
                            <div>
                                <img className="me-3" src={notif} alt="" />
                            </div>
                            <div>
                                <img className="me-3" src={mail} alt="" />
                            </div>
                            <div className="dropdown">
                                <img className="me-3 profile-btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={profile} alt="" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/profile/edit' className='ml-2'>Profile Page</Link> <br />
                                <Link to='/' className='ml-2' onClick={logout}>Log Out</Link>
                                </div>
                            </div>
                            {/* <Link to='/profile/myproduct'>
                                <div>
                                    <img className="me-3" src={profile} alt="" />
                                </div>
                            </Link> */}

                        </div>
                    </div>
                </nav>
                <nav className="bg-light d-md-none d-block navbar shadow-sm fixed-top">
                    <div className="container justify-content-center align-items-center">
                        <a className="navbar-brand" href="./home.html">
                            <img src={logo} alt="" height="35px" width="auto" />
                        </a>
                    </div>
                </nav>
                <nav className="d-md-none d-block navbar bg-light shadow-sm navbar-bottom fixed-bottom">
                    <ul className="nav d-flex justify-content-around">
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_home}
                                    alt=""
                                />
                                <span className="nav-title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_shop}
                                    alt=""
                                />
                                <span className="nav-title">Shop</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_bag}
                                    alt=""
                                />
                                <span className="nav-title">Bag</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_favorite}
                                    alt=""
                                />
                                <span className="nav-title">Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_profile}
                                    alt=""
                                />
                                <span className="nav-title">Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    } else {
        return (
            <header className="mx-auto">
               
                <nav className="bg-light d-md-block d-none navbar shadow-sm fixed-top">
                    <div className="container justify-content-between align-items-center">
                        <Link to='/'>
                            <div className="navbar-brand" href="#home">
                                <img src={logo} alt="" height="35px" width="auto" />
                            </div>
                        </Link>
                        
                        <div className="col-4 text-end d-flex justify-content-end align-items-center">
                            {/* <div href="My-Bag/mybag_index.html">
                                <img className="me-3" src={cart} alt="" />
                            </div> */}
                            <Link to="/login-cust">
                                <button className="btn-login text-reguler">Login</button>
                            </Link>
                            <Link to="/register-cust">
                                <button className="btn-signup text-reguler">Signup</button>
                            </Link>
                        </div>
                    </div>
                </nav>

                <nav className="bg-light d-md-none d-block navbar shadow-sm fixed-top">
                    <div className="container justify-content-center align-items-center">
                        <a className="navbar-brand" href="./home.html">
                            <img src={logo} alt="" height="35px" width="auto" />
                        </a>
                    </div>
                </nav>

                <nav className="d-md-none d-block navbar bg-light shadow-sm navbar-bottom fixed-bottom">
                    <ul className="nav d-flex justify-content-around">
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_home}
                                    alt=""
                                />
                                <span className="nav-title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_shop}
                                    alt=""
                                />
                                <span className="nav-title">Shop</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_bag}
                                    alt=""
                                />
                                <span className="nav-title">Bag</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_favorite}
                                    alt=""
                                />
                                <span className="nav-title">Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="d-flex flex-column text-reguler text-center align-items-center"
                                href
                            >
                                <img
                                    className="nav-icon"
                                    src={icon_profile}
                                    alt=""
                                />
                                <span className="nav-title">Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

};

export default Navigasi;