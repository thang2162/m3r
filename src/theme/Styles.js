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
};
