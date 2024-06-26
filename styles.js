import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    margin: 10,
  },
  title: {
    marginTop: 45,
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 5,
    color: "#666",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    fontSize: 18,
    marginTop: 32,
  },
  buttonContainer: {
    backgroundColor: "lightgreen",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: "flex-end",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 32,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
  },
  taskText: {
    fontSize: 18,
  },
  taskDelete: {
    width: 23,
    height: 23,
    borderRadius: 13,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  taskDeleteText: {
    fontSize: 18,
    color:"white"
  },
});
