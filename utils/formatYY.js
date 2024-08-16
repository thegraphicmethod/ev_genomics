export function formatYY(dateString){
    const theDate = new Date(dateString);
    return theDate.getFullYear()
}