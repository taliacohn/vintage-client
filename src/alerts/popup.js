import Swal from "sweetalert2";

export default function popUp(
  icon = "",
  title = "",
  text = "",
  showDenyButton = false,
  showCancelButton = false,
  showConfirmButton = true,
  denyButtonText = ""
) {
  return Swal.fire({
    icon,
    title,
    text,
    showCancelButton,
    showDenyButton,
    showConfirmButton,
    denyButtonText,
  });
}
