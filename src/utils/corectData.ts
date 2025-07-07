export const corectCountry = (data:string) =>{
    return data.split(' ').map(word => word[0]).join('')
}