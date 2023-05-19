export const getFirstOrLastListStyle = (
  index,
  length,
  styleObject,
  styleName = "listItem"
) => {
  switch (index) {
    case 0:
      return styleObject[`${styleName}First`];
    case length - 1:
      return styleObject[`${styleName}Last`];
    default:
      return styleObject[styleName];
  }
};
