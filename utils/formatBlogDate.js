export function formatBlogDate(dateString){
    const theDate = new Date(dateString);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(theDate);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(theDate);
    return month + " " + day;
}