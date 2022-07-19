import Footer from "../components/layout/Footer";

function SignUp() {
  return <h1 className="signUp">Registration</h1>;
}

export default SignUp;

SignUp.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
