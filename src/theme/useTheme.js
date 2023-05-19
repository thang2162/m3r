import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Styles } from "./Styles";

export function useTheme() {
  const themeContext = useContext(ThemeContext);
  let mergedStyle = Styles;
  if (Object.keys(themeContext).length > 0) {
    Object.keys(themeContext).forEach((w) => {
      if (Object.keys(Styles).find((x) => x === w)) {
        Object.keys(themeContext[w]).forEach((y) => {
          if (Object.keys(Styles[w]).find((z) => y === z)) {
            mergedStyle[w][y] = { ...mergedStyle[w][y], ...themeContext[w][y] };
          }
        });
      }
    });
  }
  return mergedStyle;
}
