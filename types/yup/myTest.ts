import * as yup from 'yup';

const mixedSchema = yup.mixed<string>().required();

function f<T>(s: yup.Schema<T>) {
    return s;
}
f(mixedSchema);


interface Schema2<T> {
    concat(schema: this): this;
    default(): T;
}

interface MixedSchema2<T> extends Schema2<T> {
    concat(schema: this): this;
    concat<U>(schema: Schema2<U>): MixedSchema2<T | U>;
}

function f2<T>(s: Schema2<T>) {
    return s;
}

const mixedSchema2: MixedSchema2<string> = yup.mixed<string>();     
f2(mixedSchema2);
