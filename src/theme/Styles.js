export const Styles = {
  badge: {
    container: {
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#ff5722",
      color: "#ffffff",
      fontSize: "12px",
      fontWeight: "bold",
      marginLeft: "-9px", // Adjust the negative margin to move the badge closer
      marginTop: "12px", // Adjust the negative margin to move the badge closer
    },
  },
  bottomAppBar: {
    container: {
      backgroundColor: "#6200EE",
      color: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "56px",
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
    },
    list: {
      listStyle: "none",
      display: "flex",
      padding: "0",
      margin: "0",
    },
    listItem: {
      margin: "0 8px",
    },
    listItemFirst: {
      marginLeft: "0",
    },
    listItemLast: {
      marginRight: "0",
    },
  },
  button: {
    container: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      height: "36px",
      borderRadius: "4px",
      border: "none",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "uppercase",
      backgroundColor: "#2196f3",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    hover: {
      backgroundColor: "#1976d2",
    },
    active: {
      backgroundColor: "#1565c0",
    },
  },
  iconButton: {
    container: {
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      width: "40px",
      height: "40px",
      outline: "none",
    },
    icon: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: 1,
      letterSpacing: "normal",
      textTransform: "none",
      display: "inline-block",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      direction: "ltr",
    },
  },
  icon: {
    display: "inline-block",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1",
    textTransform: "none",
    letterSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
    MozOsxFontSmoothing: "grayscale",
    cursor: "pointer",
    outline: "none",
  },
  datePicker: {
    container: {
      fontFamily: "Roboto, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    label: {
      marginRight: "16px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input: {
      border: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      fontSize: "16px",
      padding: "8px",
      marginRight: "16px",
      transition: "borderBottomColor 0.2s ease-in-out",
    },
    input_focus: {
      outline: "none",
      borderBottomColor: "#2962ff",
    },
  },
  timePicker: {
    container: {
      fontFamily: "Roboto, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    label: {
      marginRight: "16px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input: {
      border: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      fontSize: "16px",
      padding: "8px",
      marginRight: "16px",
      transition: "borderBottomColor 0.2s ease-in-out",
    },
    input_focus: {
      outline: "none",
      borderBottomColor: "#2962ff",
    },
  },
  autoComplete: {
    container: {
      position: "relative",
      width: "300px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
    },
    options: {
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      maxHeight: "200px",
      overflowY: "auto",
      padding: "0",
      margin: "0",
      listStyleType: "none",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
    },
    option: {
      padding: "10px",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
    option_hover: {
      backgroundColor: "#f0f0f0",
    },
    visuallyHidden: {
      display: "flex",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      position: "absolute",
    },
  },
};
