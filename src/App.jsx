import classes from "./App.module.scss";

import Navbar from "./components/Navbar/Navbar";
import MenuItem from "./components/MenuItem/MenuItem";
import PrimaryButton from "./components/Button/PrimaryButton";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import ContactCard from "./components/ContactCard/ContactCard";
import SecondaryButton from "./components/Button/SecondaryButton";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ExclusiveItem from "./components/ExclusiveItem/ExclusiveItem";
import FooterIconLink from "./components/FooterIconLink/FooterIconLink";
import FooterSection from "./components/FooterSection/FooterSection";
import FooterTextLink from "./components/FooterTextLink/FooterTextLink";

function App() {
  return (
    <main>
      <header className={classes.header}>
        <div className={classes.overlay}>
          <Navbar />
          <div className={classes.header__content}>
            <div className={classes.header__text}>
              <h2 className={classes["header__text--main"]}>rosted coffee <br/>for you</h2>
              <h3 className={classes["header__text--sub"]}>The coffee is brewed by first roasting the green coffee<br />coals in a brazier. given an opportunity to sample.</h3>
              <div className={classes["header__text--action"]}>
                <PrimaryButton text="TESTY COFFEE" />
                <SecondaryButton text="READ MORE" />
              </div>
            </div>
            
            <div className={classes.header__courasel}>
              <div className={classes["header__courasel--navigation"]}></div>
              <div className={`${classes["header__courasel--navigation"]} ${classes.active}`}></div>
              <div className={classes["header__courasel--navigation"]}></div>
            </div>
          </div>
        </div>
        <div className={classes.bottom__color}></div>
      </header>

      <section className={classes.about}>
        <div className={classes.about__image}>
          <img src="/assets/about.png" alt="About" />
        </div>
        <div className={classes.about__title}>
          <h3>Now enjoy a wonderful<br />cafe dining experience<br />and healthy food</h3>
        </div>
        <div className={classes.about__description}>
          <p>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Nunc vulputate libero et<br />velit interdum, ac aliquet odio mattis.</p>
          <button>About us</button>
        </div>
      </section>

      <section className={classes.menu}>
        <div className={classes.menu__header}>
          <img src="/assets/coffee__beans--1.png" alt="Coffee beans" className={classes["menu__header--image1"]} />
          <h3 className={classes["menu__header--title"]}>COFFEE SHOP</h3>
          <img src="/assets/coffee__beans--2.png" alt="Coffee beans" className={classes["menu__header--image2"]} />

          <img src="/assets/coffee__cup.png" alt="coffee cup" className={classes["menu__header--cup"]} />
        </div>

        <div className={classes["menu__list"]}>
          <SectionTitle title="Popular Menu" />

          <div className={classes["menu__list--items"]}>
            <div className={classes["menu__list--items--section"]}>
              <MenuItem image="/assets/menu__item--1.png" title="Americano" description="Lorem ipsum dolor sit amet," prize="10.00" />
              <MenuItem image="/assets/menu__item--2.png" title="Dopio" description="Lorem ipsum dolor sit amet, margin and padding." prize="15.00" />
              <MenuItem image="/assets/menu__item--3.png" title="Latte" description="Lorem ipsum dolor sit amet, only padding" prize="18.00" />
              <MenuItem image="/assets/menu__item--4.png" title="Espresso Conpana" description="Lorem ipsum dolor sit amet, only marging" prize="23.00" />
            </div>

            <div className={classes["menu__list--items--section"]}>
              <MenuItem image="/assets/menu__item--5.png" title="Cappuccino" description="Lorem ipsum dolor sit amet, not using padding" prize="5.00" />
              <MenuItem image="/assets/menu__item--6.png" title="Irish" description="Lorem ipsum dolor sit amet," prize="7.00" />
              <MenuItem image="/assets/menu__item--7.png" title="Espresso" description="Lorem ipsum dolor sit amet, not marrgin" prize="26.00" />
              <MenuItem image="/assets/menu__item--8.png" title="Mocha" description="Lorem ipsum dolor sit amet,  yes can coffee" prize="50.00" />
            </div>
          </div>
        </div>
      </section>
    
      <section className={classes.exclusive}>
        <SectionTitle title="Exclusive Coffee" />
        
        <div className={classes.exclusive__items}>
          <ExclusiveItem image="/assets/exclusive--1.png" title="Ameriacno" description="Lorem ipsum dolor sit amet, margin and padding." price="19.00" />
          <ExclusiveItem image="/assets/exclusive--2.png" title="Ameriacno" description="Lorem ipsum dolor sit amet, margin and padding." price="20.00" />
          <ExclusiveItem image="/assets/exclusive--3.png" title="Ameriacno" description="Lorem ipsum dolor sit amet, margin and padding." price="15.00" />
        </div>
      </section>

      <section className={classes.message}>
        <div className={classes["message__section--1"]}>
          <img src="/assets/master__chef.png" alt="Master Chef" className={classes.message__image} /> 
          
          <div className={classes.message__container}>
            <blockquote>              
              <h3 className={classes.message__title}>Masterchef message</h3>
              <h4 className={classes["message__sub-title"]}>Unique and delicious dishes from the worlds best masterchefs</h4>
              <p className={classes.message__message}>Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </blockquote>
          </div>
        </div>
        <div className={classes["message__section--2"]}>
          <div className={`${classes.message__card} ${classes["message__card--text"]} ${classes["message__card--1"]}`}>
            <p>Delicious Morning Coffee</p>
          </div>

          <div className={`${classes.message__card} ${classes["message__card--image"]} ${classes["message__card--2"]}`}>
            <img src="/assets/message--1.png" alt="Coffee" />
          </div>

          <div className={`${classes.message__card} ${classes["message__card--image"]} ${classes["message__card--3"]}`}>
            <img src="/assets/message--2.png" alt="Coffee" />
          </div>

          <div className={`${classes.message__card} ${classes["message__card--text"]} ${classes["message__card--4"]}`}>
            <p>Delicious Morning Coffee</p>
          </div>
        </div>
      </section>

      <section className={classes.testimonial}>
        <SectionTitle title="OUR GUESTBOOK" />

        <div className={classes.testimonial__cards}>
          <div className={classes.card}>
            <blockquote>Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</blockquote>
            <div className={classes.card__profile}>
              <img src="/assets/testimonial--1.png" alt="" className={classes["card__profile--image"]} />
              <h4 className={classes["card__profile--name"]}>Mukesh Babu</h4>
              <p className={classes["card__profile--profession"]}>Student</p>
            </div>
          </div>

          <div className={`${classes["card"]} ${classes["card--highlighted"]}`}>
            <blockquote>Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</blockquote>
            <div className={classes.card__profile}>
              <img src="/assets/testimonial--2.png" alt="" className={classes["card__profile--image"]} />
              <h4 className={classes["card__profile--name"]}>Mukesh Babu</h4>
              <p className={classes["card__profile--profession"]}>Student</p>
            </div>
          </div>

          <div className={classes.card}>
            <blockquote>Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</blockquote>
            <div className={classes.card__profile}>
              <img src="/assets/testimonial--3.png" alt="" className={classes["card__profile--image"]} />
              <h4 className={classes["card__profile--name"]}>Mukesh Babu</h4>
              <p className={classes["card__profile--profession"]}>Student</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.services}>
        <SectionTitle title="EXQUISITE SERVICES" />
        <div className={classes.services__cards}>
          <ServiceCard 
            image="/assets/service__image--1.png" 
            icon="/assets/service__icon--1.svg" 
            title="Bean Varieties" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet," />

          <ServiceCard 
            image="/assets/service__image--2.png" 
            icon="/assets/service__icon--2.svg" 
            title="Bean Varieties" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet," />
          
          <ServiceCard 
            image="/assets/service__image--3.png" 
            icon="/assets/service__icon--3.svg" 
            title="Bean Varieties" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet," />

          <ServiceCard 
            image="/assets/service__image--4.png" 
            icon="/assets/service__icon--4.svg" 
            title="Bean Varieties" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet," />
        </div>
      </section>

      <section className={classes.contact}>
        <div className={classes.contact__cards}>
          <ContactCard 
            icon="/assets/contact__icon--1.svg"
            title="Let's Talk"
            info="Phone: 1-800-222-000 Fax: 1-800-222-002"
            />

          <ContactCard 
            icon="/assets/contact__icon--2.svg"
            title="TICKETS INFO"
            info="info@yourdomain.com hr@yourdomain.com"
            />

          <ContactCard 
            icon="/assets/contact__icon--3.svg"
            title="cotact us"
            info="401 Broadway, 24th Floor New York, NY 10013"
            />

          <ContactCard 
            icon="/assets/contact__icon--4.svg"
            title="EVENT DETAILS"
            info="Lorem ipsum is simply dummy text printing"
            />
        </div>
      </section>

      <footer className={classes.footer}>
        <div className={classes.footer__overlay}></div>

        <div className={classes.footer__info}>
          <section className={classes["footer__section--1"]}>
            <div className={classes["footer__company--info"]}>
              <img src="/assets/logo.png" alt="Company Logo" />
              <p className={classes["footer__company--moto"]}>Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            
            <p className={classes["footer__company--description"]}>Lorem ipsum dolor sit amet, ssfsf dfsgag consectetur gdfads adipiscing elit. Nunc vulputate libero et velit interdum, ac dfvg aliquet odio asds sdsds fggmattis.</p>

            <div className={classes["footer__company--social"]}>
              <FooterIconLink icon="/assets/youtube.svg" />
              <FooterIconLink icon="/assets/instagram.svg" />
              <FooterIconLink icon="/assets/facebook.svg" />
            </div>
          </section>

          <FooterSection title="Useful Links">
            <FooterTextLink link="/#" text="Privacy Policy" />
            <FooterTextLink link="/#" text="Returns" />
            <FooterTextLink link="/#" text="Terms & Conditions" />
            <FooterTextLink link="/#" text="Our Sitemap" />
            <FooterTextLink link="/#" text="Latest News" />
            <FooterTextLink link="/#" text="Blog" />
          </FooterSection>

          <FooterSection title="Lets Help You">
            <FooterTextLink link="/#" text="Account" />
            <FooterTextLink link="/#" text="Password Recovery" />
            <FooterTextLink link="/#" text="Contact us" />
            <FooterTextLink link="/#" text="Get Help" />
            <FooterTextLink link="/#" text="Purchase Information" />
            <FooterTextLink link="/#" text="Purchase Details" />
          </FooterSection>

          <FooterSection title="Subscribe">
            <input className={classes["footer__newsletter--email"]} placeholder="Enter your e-mail" type="email" />
            <SecondaryButton text="Subscribe now" />
          </FooterSection>
        </div>
        <div className={classes.footer__copyright}>&copy; 2022 Dribbble. All rights reserved.</div>
      </footer>
    </main>
  )
}

export default App;
