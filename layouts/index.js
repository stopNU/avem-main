import MainNavigation from "../components/navigation/main-navigation";
import Footer from "../components/shared/footer";

const Layout = ({ dark, children, data }) => {
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
      />
      <main>{children}</main>
      <Footer logo={data.color_logo} />
    </>
  );
};

export default Layout;
