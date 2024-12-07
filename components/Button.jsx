import styles from "./Counnter.module.css";

const Button = ({ url, alt, onclick, children }) => {
  return (
      <button title={children} onClick={onclick} className= {[styles.bgred,styles.text3xl].join(' ')}>
      <img src={url} alt={alt} />
      {children}
    </button>
  );
};

export default Button;
