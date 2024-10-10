"use client";
import Image from "next/image";
import "../nav.css";
import Link from "next/link";
import useToggle from "/app/hooks/useToggle";

const AuthNav = () => {
  const { switch1, switch2, toggle, toggle2 } = useToggle();

  return (
    <div className="nav-wrap">
      <div className="business-nav-flex">
        <Link href="/" className="logo">
          <Image src="/logoBusiness.svg" width="272" height="33" alt="omooo" layout="responsive" />
        </Link>
        {/* <div className="userFn">
          <div className="user-wrap">
            <span className="review">Write a review</span>
            <div className="dropdown-wrap">
              <div className="business" onClick={switch1}>
                <div>
                  <p className="review">Lookupon for business</p>
                </div>
                <Image
                  className={toggle ? "rotate" : "rotate0"}
                  src="expand.svg"
                  width="20"
                  height="20"
                  alt="omooo"
                />
                <div className={toggle ? "dropdown" : "dropdown-off"}>
                  <p className="dropdown-list">Add a business</p>
                  <p className="dropdown-list">Sign in to business account</p>
                </div>
              </div>
            </div>

          </div>
        </div> */}
        <div className="business-sign-wrap">
          {/* <Image
            src="/profileImage.svg"
            alt="User Image"
            height="40"
            width="40"
            onClick={switch2}
            className={toggle2 ? "rotate2" : "rotate0"}
          />
          <div className={toggle2 ? "dropdown2" : "dropdown-off2"}>
            <p className="dropdown-list">Profile</p>
            <p className="dropdown-list">Account settings</p>
            <p className="dropdown-list">Sign Out</p>
          </div> */}

          <Link className="sign_in" href="/business/signIn">Sign In</Link>
          <Link className="sign_up" href="/business/signUp">Sign Up</Link>
        </div>
      </div>
    </div >
  );
};

export default AuthNav;
