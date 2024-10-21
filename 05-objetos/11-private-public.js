function Usuario(params) {
  this.name = "Nicolas";

  let log = ()=> {
    console.log("logggin...");
  }
  
  this.guardar = () => {
    log();
    console.log("guardando...");
  };
}

const usuario = new Usuario();
console.log(usuario);
usuario.guardar();
