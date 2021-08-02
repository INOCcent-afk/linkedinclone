import React from "react";

import Loader from "react-loader-spinner";

import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Home = () => {
  const [session] = useSession();
  const router = useRouter();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (session) {
      router.push("/home");
    }
    let timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [session]);

  return (
    <div className="absolute center-transform">
      {!show ? (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      ) : (
        <div
          className="m-auto font-bold text-4xl cursor-pointer"
          onClick={() => signIn("google")}
          data-test="signin"
        >
          Google Sign in!
        </div>
      )}
    </div>
  );
};

export default Home;
