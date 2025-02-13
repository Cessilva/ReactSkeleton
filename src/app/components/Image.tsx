import Image from "next/image"

export const RandomImage1 = (alt:string ,src:string):JSX.Element =>{
    return <Image alt={alt} src={src}></Image>
}