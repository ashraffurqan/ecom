import { StaticImageData } from "next/image";
export  type Product={
id:number,
title:string,
image?:any|string[]| StaticImageData|undefined,
slug:string,
price:number,
category:string,
description:string,
size:string[],
color:string[],
qty:number,
discount?:number,
};
export  type Cart={
id:number,
title:string,
image?: any|string| StaticImageData,
slug:string,
price:number,
discount?:number,
category:string,

size:string[],
color:string,
qty:number,
uuid:string|number|undefined

};
