import classes from "./FooterTextLink.module.scss";

function FooterTextLink({ link, text }) {
  return (
    <a className={classes.text__link} href={link}>{text}</a>
  )
}

export default FooterTextLink;