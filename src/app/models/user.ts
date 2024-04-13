export class User {
    id?: number; // Opcional, ya que Django crea automáticamente el ID
    username: string="";
    email: string="";
    password: string=""; // Asegúrate de manejar la encriptación del lado del servidor
    first_name: string="";
    last_name: string="";
}
