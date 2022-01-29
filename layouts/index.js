import MainNavigation from "../components/navigation/main-navigation";
import Footer from "../components/shared/footer";

const Layout = ({ dark, children, data, style }) => {
  const navLogo = dark ? data.color_logo : data.white_logo;

  const navItems =
    data.body[0].slice_type === "menu" ? data.body[0].items : null;

  const highlightedBtn =
    data.body[0].slice_type === "menu" ? data.body[0].primary : null;

  return (
    <>
      <MainNavigation
        dark={dark}
        logo={navLogo}
        navItems={navItems}
        button={highlightedBtn}
        logo_mobile={data.color_logo}
      />
      <main>{children}</main>
      <Footer
        logo={data.color_logo}
        navItems={navItems}
        socialMedia={data.social_media_list}
        copyright={data.copyright_text}
        privacyPolicy={data.privacy_policy_link}
        terms={data.terms_link}
      />
    </>
  );
};

export default Layout;
