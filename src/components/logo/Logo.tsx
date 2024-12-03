import LogoMark from "../../assets/logo-main.svg";
import LogoType from "../../assets/logo-type.svg";
import "./Logo.css";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  return (
    <div className='logo'>
      <img src={LogoMark} alt='Logo Main' className='logo-mark' />
      {showText && <img src={LogoType} alt='Logo Main' className='logo-type' />}
    </div>
  );
};

export default Logo;
