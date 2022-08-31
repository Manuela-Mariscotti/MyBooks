export class Usuario {
    public id_usuario : number
    public nombre : string
    public apellido : string
    public email : string
    public url : string
    public password : string

    
    constructor(id_usuario:number,nombre:string, apellido:string, email:string, url:string, password:string){
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.url = url;
        this.password = password;

    }
    
    public nombreCompleto():string{
        return this.nombre + " " + this.apellido;
    }
}
