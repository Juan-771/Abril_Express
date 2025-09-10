const opcion = prompt(
    "Por favor, selecciona tu rol:\n" +
    "1. Camper\n" +
    "2. Trainer\n" +
    "3. Coordinador\n"
  );
  
  let menu = "";
  
  switch (opcion) {
    case "1":
      menu = "Menú Camper";
      break;
    case "2":
      menu = "Menú Trainer";
      break;
    case "3":
      menu = "Menú Coordinador";
      break;
    default:
      menu = "Opción inválida";
      break;
  }