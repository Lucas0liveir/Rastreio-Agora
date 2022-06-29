export function getTypeStatus(description: string): string {
    if (description.includes('entregue ao destinatário')) {
        return 'Entregue'
    } else if (description.includes('trânsito')) {
        return 'Truck'
    } else if (description.includes('postado')) {
        return 'Package'
    } else if (description.includes('saiu para entrega')) {
        return 'Saiu para entrega'
    } else if (description.includes('Fiscalização aduaneira finalizada')) {
        return 'Fiscalização aduaneira finalizada'
    } else if (description.includes('recebido pelos Correios do Brasil')) {
        return 'Flag Brazil'
    } else if (description.includes('carteiro não atendido')) {
        return 'Carteiro não atendido'
    } else {
        return ''
    }
}