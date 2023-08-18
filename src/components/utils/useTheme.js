import { useState } from "react";

const useTheme = (initialValue) => {
  const [theme, setTheme] = useState(initialValue);

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return { theme, changeTheme };
};

export default useTheme;
