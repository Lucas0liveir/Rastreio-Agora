import { EventsPackageStatus } from "./EventsPackageStatus";

export interface PackageDTO {
    name: string;
    codObjeto: string;
    mensagem?: string;
    eventos: EventsPackageStatus[];
    modalidade: string;
    tipoPostal: {
        categoria: String;
        descricao: String;
        sigla: String
    };
    habilitaAutoDeclaracao?: false;
    permiteEncargoImportacao?: false;
    habilitaPercorridaCarteiro?: false;
    bloqueioObjeto?: false;
    possuiLocker?: false;
    habilitaLocker?: false;
    habilitaCrowdshipping?: false;
}