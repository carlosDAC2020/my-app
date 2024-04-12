export class User {
    id?: number; // Opcional, ya que Django crea automáticamente el ID
    username: string="";
    email: string="";
    password: string=""; // Asegúrate de manejar la encriptación del lado del servidor
    first_name: string="";
    last_name: string="";
    is_active?: boolean; // Opcional, dependiendo de tus necesidades
    date_joined?: Date; // Opcional, dependiendo de tus necesidades
    last_login?: Date; // Opcional, dependiendo de tus necesidades
    // Otros campos según tu modelo de usuario en Django
}
