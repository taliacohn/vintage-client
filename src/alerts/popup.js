import Swal from "sweetalert2";

export default function popUp(
  icon = "",
  title = "",
  text = "",
  showConfirmButton = true,
  showCancelButton = false,
  showDenyButton = false,
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
