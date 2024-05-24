import classes from "./FooterIconLink.module.scss";
function FooterIconLink({ icon }) {
  return (
    <a href="/#">
        <img src={icon} alt="Icon" />
    </a>
  )
}

export default FooterIconLink;