export const setIconType = (mergedStyle, styleType) => {
  let newMergedStyle = mergedStyle;
  switch (styleType) {
    case "outlined":
      newMergedStyle.icon.fontFamily = "Material Icons Outlined";
      return newMergedStyle;
    case "sharp":
      newMergedStyle.icon.fontFamily = "Material Icons Sharp";
      return newMergedStyle;
    case "round":
      newMergedStyle.icon.fontFamily = "Material Icons Round";
      return newMergedStyle;
    default:
      newMergedStyle.icon.fontFamily = "Material Icons";
      return newMergedStyle;
  }
};
