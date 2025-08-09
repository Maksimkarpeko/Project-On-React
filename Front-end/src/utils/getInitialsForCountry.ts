export const getInitialsForCountry = (data:string | null) =>{
    if(data == null){
        return 'NA';
    } else if (typeof data == "string" ){
        return data.split(' ').map(word => word[0]).join('')
    }
}