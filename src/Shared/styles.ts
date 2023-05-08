import { FONT_FAMILY } from "./constants";

export const avatar: React.CSSProperties = {
  position: "absolute",
  width: "25%",
  height: "25%",
  marginLeft: 703,
  marginTop: 410,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

export const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: "bold",
  fontSize: 100,
  textAlign: "center",
  position: "absolute",
  bottom: 790,
  width: "100%",
};

export const by: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontSize: 60,
  textAlign: "center",
  position: "absolute",
  bottom: 730,
  width: "100%",
};

export const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: "inline-block",
};

export const firstBoxStatus: React.CSSProperties = {
  width: 400,
  height: 130,
  border: "2px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  marginTop: 600,
  marginLeft: 350,
};

export const boxStatus: React.CSSProperties = {
  width: 400,
  height: 130,
  border: "2px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  marginTop: 600,
};

export const description: React.CSSProperties = {
  width: 800,
  height: 240,
  backgroundColor: "#dadada",
  borderRadius: 1,
  padding: 20,
  textAlign: "center", // Ajout de cette ligne pour centrer le texte
  fontSize: 26,
  fontWeight: "bold",
  lineHeight: 1.5,
  marginLeft: 600,
  marginTop: 720,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};


export const buttonStyles: React.CSSProperties = {
  padding: 10,
  border: "none",
  fontWeight: 600,
  borderRadius: 5,
  width: "100%",
  height: 60,
  fontSize: 18,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  margin: 15,
};

export const inputStyles: React.CSSProperties = {
  padding: 10,
  border: "none",
  fontWeight: 600,
  borderRadius: 5,
  width: "20%",
  height: 60,
  fontSize: 18,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  marginTop: 10,
  marginLeft: 300,
  position: "absolute",
};

export const rectangleStyles: React.CSSProperties = {
  backgroundColor: "white",
  width: "400%",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  borderRadius: 5,
};