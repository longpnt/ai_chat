import { SignIn } from "@clerk/clerk-react";
import "./signInPage.css";

const signInPage = () => {
  return (
    <div className="signInpage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default signInPage;
