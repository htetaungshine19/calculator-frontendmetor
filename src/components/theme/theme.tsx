import React from "react";

export const aC = React.createContext({
  f: (a: theme_types) => {},
});

export enum theme_types {
  theme_1,
  theme_2,
  theme_3,
}

export const AP: React.FC = ({ children }) => {
  function setTheme(t: theme_types) {
    if (t === theme_types.theme_1) {
      document.getElementById("1")?.setAttribute("checked", "");
      document.getElementById("2")?.removeAttribute("checked");
      document.getElementById("3")?.removeAttribute("checked");
      window.localStorage.setItem("theme", "1");
      document.querySelector("body")?.classList.add("t_1");
      document.querySelector("body")?.classList.remove("t_2");
      document.querySelector("body")?.classList.remove("t_3");
    } else if (t === theme_types.theme_2) {
      document.getElementById("2")?.setAttribute("checked", "");
      document.getElementById("1")?.removeAttribute("checked");
      document.getElementById("3")?.removeAttribute("checked");
      window.localStorage.setItem("theme", "2");
      document.querySelector("body")?.classList.remove("t_1");
      document.querySelector("body")?.classList.add("t_2");
      document.querySelector("body")?.classList.remove("t_3");
    } else if (t === theme_types.theme_3) {
      document.getElementById("3")?.setAttribute("checked", "");
      document.getElementById("2")?.removeAttribute("checked");
      document.getElementById("1")?.removeAttribute("checked");
      window.localStorage.setItem("theme", "3");
      document.querySelector("body")?.classList.remove("t_1");
      document.querySelector("body")?.classList.remove("t_2");
      document.querySelector("body")?.classList.add("t_3");
    }
  }

  React.useEffect(() => {
    const t = window.localStorage.getItem("theme");
    if (t === null) {
      let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (matched) {
        setTheme(theme_types.theme_1);
      }
    } else {
      if (t === "1") {
        setTheme(theme_types.theme_1);
      } else if (t === "2") {
        setTheme(theme_types.theme_2);
      } else if (t === "3") {
        setTheme(theme_types.theme_3);
      }
    }
  }, []);

  return (
    <aC.Provider
      value={{
        f: (a: theme_types) => {
          setTheme(a);
        },
      }}
    >
      {children}
    </aC.Provider>
  );
};
