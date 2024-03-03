import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-G199H66HW9");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
