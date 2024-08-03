
class TicketManager {

    #precioBaseDeGanancia = 1.15;

    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEventos(nombre, lugar, precio){

        let id_evento = this.eventos.length;

        let evento = {
            nombre: nombre,
            lugar: lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++id_evento
        }

        this.eventos.push(evento);
        return this.eventos;
    }

    traerEvento(idEvento){
        let evento = this.eventos.find(elemento => elemento.id == idEvento);
        if (evento){
            return evento
        } else {
            return null
        }
    }

    agregarUsuario(id_evento, id_usuario){
        const evento = this.traerEvento(id_evento);
        if (evento == null){
            return ['El evento no existe'];
        }

        if (this.estaRegistrado(id_evento, id_usuario)){
            evento.participantes.push(id_usuario)
        }else {
            return['La persona ya esta registrada']
        }
    }

    estaRegistrado(id_evento, id_usuario){
        let evento = this.traerEvento(id_evento);
        let registro = evento.participantes.find(idParticipante => idParticipante == id_usuario);
        if(registro === undefined){
            return true;
        } else {
            return false
        }
    }

    ponerEventoEnGira(id_evento, nLocalidad, nFecha){
        let evento = this.traerEvento(id_evento);
        let id_newEvento = this.eventos.length;
        if(!evento){
            return ['El evento no existe']
        }

        let nuevoEvento = {...evento};
        nuevoEvento.lugar = nLocalidad;
        nuevoEvento.fecha = nFecha;
        nuevoEvento.id = ++id_newEvento;
        this.eventos.push(nuevoEvento);

        return this.eventos
    }

}


const ticketManager = new TicketManager();

ticketManager.agregarEventos('baradero rock', 'baradero', 1500);
ticketManager.agregarEventos('San pedro rock', 'San pedro', 1500);

console.log(ticketManager.getEventos);


ticketManager.agregarUsuario(1,1)
ticketManager.agregarUsuario(1,2)
ticketManager.ponerEventoEnGira(2,'ramallo', '11-12-2024')


