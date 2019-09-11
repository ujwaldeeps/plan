export class Plan {
    public name: string;
    public value: number;
    public startDate: Date;
    public endDate: Date;


    constructor(name: string, value: number, startDate: Date, endDate: Date) {
        this.name = name;
        this.value = value;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}