import popUp from "./popup";

export default function logOut() {
  return popUp(
    undefined,
    "Do you want to log out?",
    undefined,
    true,
    true,
    false,
    "Log out"
  ).then((result) => {
    if (result.isDenied) {
      firePopUp(undefined, "Logged out succesful");
    }
  });
}
