export const setIconType = (mergedStyle, styleType) => {
  let newMergedStyle = mergedStyle;
  switch (styleType) {
    case "outlined":
      newMergedStyle.icon.fontFamily = "Material Symbols Outlined";
      return { style: newMergedStyle, className: "material-symbols-outlined" };
    case "round":
      newMergedStyle.icon.fontFamily = "Material Symbols Rounded";
      return { style: newMergedStyle, className: "material-symbols-rounded" };
    default:
      newMergedStyle.icon.fontFamily = "Material Symbols Sharp";
      return { style: newMergedStyle, className: "material-symbols-sharp" };
  }
};
