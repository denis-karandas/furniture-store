export const formatToString = (value, currency) => {
    switch (currency) {
        case 'USD':
            return '$' + value.toString();
        default:
            return '';
    }
};