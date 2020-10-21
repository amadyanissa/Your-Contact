import Swal from "sweetalert2"

interface ConfirmDeleteParams {
    onSure: () => void
}
export function ConfirmDelete(params: ConfirmDeleteParams){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        params.onSure()
        }
      })
}

export function fireText(title: string, icon: "success" | "error" ){
  Swal.fire({
    title,
    icon
  })
}

export function openToast(icon: "error" | "success", title: string) {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  void toast.fire({
    icon,
    title,
  });
}