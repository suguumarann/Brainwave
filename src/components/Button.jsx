import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => { //props: might want to pass onClick function to it, pixel values or just colors (white)
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7" //if passing specific pixel values or else default is set to "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`; //if white true then render text-n-8 else render text-n-1, and if there is class name then render them or else just render empty string
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => ( //sometimes you just want to provide a link component, not button always
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  //if href property exists (passing links), then renderLink or else renderButton
  return href ? renderLink() : renderButton();
};

export default Button;
