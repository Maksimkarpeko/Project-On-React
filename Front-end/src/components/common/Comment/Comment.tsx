import { TestImg } from "assets/index"
import type { FC } from "react"
import type { CommentProps } from "./type"
export const Comment:FC<CommentProps> = ({content,name}) =>{
  return(
    <div className="flex pl-3 pt-2">
      <img src={TestImg} alt="test" width={'43px'} />
      <p className="pt-2 pl-2 text-xl">{name}:</p>
      <div className="w-[75%] pt-2 pl-2 text-xl break-words whitespace-pre-wrap">{content}</div>
    </div>
  )
}