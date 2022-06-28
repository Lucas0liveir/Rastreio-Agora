export interface EventsPackageStatus {
    codigo: string;
    descricao: string;
    dtHrCriado: string;
    tipo?: string;
    unidade: Unidade;
    urlIcone: string;
}

type Unidade = {
    endereco: {
        cidade: string;
        uf: string
    },
    tipo: string
}