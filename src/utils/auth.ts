import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import moment from 'moment';

export const login = ({ token }) => {
  cookie.set("token", token, { expires: 1 });
  Router.push("/profile");
};

export const logout = () => {
  cookie.remove("token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", moment().utc().toISOString());
  Router.push("/login");
};

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push("/login");
  }

  return token;
};

export const withAuthSync = WrappedComponent => {
  const Wrapper = (props: any) => {};

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};
