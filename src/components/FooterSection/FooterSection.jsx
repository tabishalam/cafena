import classes from "./FooterSection.module.scss";

export default function FooterLinkSection({ title, children }) {
  return (
    <section className={classes.footer__section}>
        <h3 className={classes["footer__section--title"]}>{title}</h3>
        <div className={classes["footer__section--items"]}>
            {children}
        </div>
    </section>
  )
}
