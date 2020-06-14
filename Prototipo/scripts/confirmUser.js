let sendConfirmationCode = document.querySelector("#sendConfirmationCode").addEventListener("click", validationCode);

function validationCode(){
  let confCode = Math.floor(Math.random()*10);
  //console.log(confCode);
  swal.fire({
    title: "¡Correcto!",
    text: `Éste es tu codigo de registro: ${confCode}`,
    icon: "success",
    confirmButtonText: "Continuar"
  });
  return confCode;
}

let verificationButton = document.querySelector("#verificationButton").addEventListener("click", register);
let ultimateCodeV = document.querySelector("#ultimateCodeV");

function register(confCode){ //verificar estos formularios tambien
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation()
    //console.log("llega a false");
  }else{
      swal.fire({
        title: "¡Correcto!",
        text: `Ahora vamos a iniciar sesión.`,
        icon: "success",
      }).then(
        setTimeout(() => document.location.href = "./index.html", 2000)
      );
      //console.log("llega al true"); //llega aqui pero no me permite else if ni otro codigo dentro de else
      //falta validacion para saber si metio el codigo correcto (confcode)
    }
  //console.log(confCode);
}



//recuerda hacer una funcion para el boton de enviar codigo que no se active a menos
//que se seleccione alguno de los dos radius


let cancelVerificationButton = document.querySelector("#cancelVerificationButton").addEventListener("click", alerta);

function alerta(){
  swal.fire({
    title: "¿Seguro?",
    text: `¿Estas seguro de cancelar el registro?`,
    icon: "question",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
    confirmButtonText: "Continuar",
    /*html:`<button class="btn btn-danger">Cancelar</button>
    <button class="btn btn-primary" id="aver">Continuar</button>`*/
  }).then((result) => {
    if (result.value){
      swal.fire({
        title: "¡Continuemos!",
        icon: "success",
      });
    }else {
      document.location.href = "./index.html"
    }
  })
}
