export interface postProps {
    content:string,
    img:string,
    username:string,
    isLike?:boolean,
    countComment?:number,
    countLike?:number,
    onClickLike?:() =>void,
    onClickComment?:() =>void,
}