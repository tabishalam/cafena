import classes from "./SectionTitle.module.scss";
function SectionTitle({ title }) {
  return (
    <div className={classes["section__title"]}>
        <div className={classes["section__title--line"]}></div>
        <h3 className={classes["section__title--text"]}>{title}</h3>
        <div className={classes["section__title--line"]}></div>
    </div>
  )
}

export default SectionTitle;