import IEvento from '../model/IEvento';
import NexmoSMSApi from '../externalapi/NexmoSMSApi';
import TIPO_EVENTO from '../model/TIPO_EVENTO';
import Configuracao from '../model/Configuracao';

/**
 * Api responsavel por tratamento e execucao de eventos
 */
class EventoApi {

    private smsApi: NexmoSMSApi;

    constructor() {
        this.smsApi = new NexmoSMSApi();
    }

    /**
     * Executa a acao relacionada ao evento
     *
     * @param evento a ser executado
     */
    public executarEvento(evento: IEvento) {
        if (evento.tipo === TIPO_EVENTO.MENSAGEM) {
            this.enviarSMS(evento);
        }
    }

    private enviarSMS(evento: IEvento) {
        // Implementacao particular do envio de SMS que faz uso do atributo 'smsApi'...
    }
}

export default EventoApi;
