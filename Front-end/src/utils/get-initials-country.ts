export const getInitialsForCountry = (data:string | null) =>{
    if(data == null){
        return 'NA';
    } else if (typeof data == "string" ){
        if (data.split(' ').map(word => word[0]).join('').length === 1){
            return ''
        } else{
            return `,${data.split(' ').map(word => word[0]).join('')}`
        }
    }
}