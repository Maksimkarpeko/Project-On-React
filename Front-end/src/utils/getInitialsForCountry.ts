export const getInitialsForCountry = (data:string) =>{
    return data.split(' ').map(word => word[0]).join('')
}