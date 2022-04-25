import type { NextPage } from "next";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

const Home: NextPage = () => {
  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div className="grid place-items-center bg-violet-500">
      <div className="h-3/4 w-2/6 bg-white rounded shadow-xl grid place-content-center gap-10">
        <p className="text-xl">Social Logins</p>
        <FacebookLogin
          appId=""
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps: any) => (
            <button
              className="bg-blue-500 text-white p-2 rounded shadow-md"
              onClick={renderProps.onClick}
            >
              Login With Facebook
            </button>
          )}
        />
        <GoogleLogin
          clientId=""
          buttonText="Login Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              className="text-gray-500 p-2 rounded shadow-md"
              onClick={renderProps.onClick}
            >
              Login With Google
            </button>
          )}
        />
        ,
      </div>
    </div>
  );
};

export default Home;
