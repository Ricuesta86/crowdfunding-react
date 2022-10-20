export type dataType ={
    totalBacked:number;
    totalBackers:number,
    backed:number,
    dayLeft:number,   
}

export type product ={
    title: string,
    pledge: number,
    text: string
    amount: number,
}
export type amount ={
    amount25: number,
    amount75: number,
    amount200: number,
}

export type action = {
    type:string;
    payload:object;
}