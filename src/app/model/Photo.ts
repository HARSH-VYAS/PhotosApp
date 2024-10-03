export class Photo{

    id : number;
    name : string;
    style : string;
    size : number;
    fileType : string;
    vote : number;
    src : string;

    constructor(id:number, name:string, style:string, size:number, fileType:string, vote:number, src:string)
    {
        this.id=id;
        this.name=name;
        this.style=style;
        this.size=size;
        this.fileType=fileType;
        this.vote=vote;
        this.src = src;
    }

}