export class Expens{
   private id?:string;
   private title!:string;
   private description!:string;
   private cost!:number

  constructor(title:string,description:string,cost:number,id?:string) {
    this.title = title;
    this.description = description;
    this.cost = cost;
    this.id = id;

  }

  getId(): any {
    return this.id;
  }

  setId(value: any) {
    this.id = value;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getDiscription(): string {
    return this.description;
  }

  setDiscription(value: string) {
    this.description = value;
  }

  getCost(): number {
    return this.cost;
  }

  setCost(value: number) {
    this.cost = value;
  }
}
