export function sliceStr(str: string): string {
    if(str.length > 50) {
        str.slice(50, str.length - 1)
        return `${str}...`;
    }
    return str || '';
}

export function updatePrice(namePrace: string, price: string): string {
    switch (namePrace) {
        case 'USD': 
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
        default: 
            return `${price} GBP`
    }
}

export function updateClass(remainder: number): string {
    if (remainder <= 10) {
        return 'low';
    } else if (remainder <= 20 && remainder > 10) {
        return 'medium';
    } 
    return 'high'
}