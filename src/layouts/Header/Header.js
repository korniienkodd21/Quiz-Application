import "./Header.css";
import logo from "./../../assets/icons/logo.svg";

const Header = ({ onResetAppState }) => {
   return (
      <header className="header">
         <button className="header__content" type="button" onClick={onResetAppState}>
            <img className="header__logo" src={logo} alt="logotype" />
            <p className="header__title">Quiz Application</p>
         </button>
      </header>
   );
};

export default Header;
