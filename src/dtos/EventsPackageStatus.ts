export interface EventsPackageStatus {
    codigo: string;
    detalhe?: string;
    descricao: string;
    dtHrCriado: string;
    tipo?: string;
    unidade: Unidade;
    unidadeDestino?: UnidadeDestino;
    urlIcone: string;
}

type Unidade = {
    codSro?: string;
    nome?: string;
    endereco: {
        bairro?: string;
        cep?: string;
        cidade: string;
        logradouro?: string;
        numero?: string;
        uf: string;
    },
    tipo: string
}

type UnidadeDestino = {
    codSro?: string;
    nome?: string;
    endereco: {
        bairro?: string;
        cep?: string;
        cidade: string;
        logradouro?: string;
        numero?: string;
        uf: string;
    },
    tipo: string
}