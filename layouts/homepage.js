import MainNavigation from "../components/navigation/main-navigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation dark />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;