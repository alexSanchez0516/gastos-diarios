import Swal from "sweetalert2";

export function alertError(message: string) : void{
  Swal.fire({
    title: '¡Error!',
    text: `${message}`,
    icon: 'error',
    confirmButtonText: 'Ok'
  }).then();
}

export function alertSuccessTimerShowHide(message : string) : void {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${message}`,
    background: '#19181f',
    showConfirmButton: false,
    timer: 1500
  }).then();
}
