// Module: exceptions



export class ExceptionMeta {
    exceptionFields: Map<string, string>;
    exceptionMessage: string;
    exceptionModule: string;
    exceptionType: string;
    constructor(arg: {exceptionFields: Map<string, string>; exceptionMessage: string; exceptionModule: string; exceptionType: string;}) {
        Object.assign(this, arg);
    }
}