import Footer from "components/layout/Footer";

function SignIn() {
  return <h1 className="signIn">Sign In</h1>;
}

export default SignIn;

SignIn.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
