import * as _ from 'lodash';
import { IEvent } from '../interfaces/ievent.interface';

export class Evento implements IEvent {

    constructor(data) {
       _.set(this, 'data', data);
    }

    get descripcion(): string {
        return _.get(this, 'data.descripcion');
    }

    set descripcion(value: string) {
        _.set(this, 'data.descripcion', value);
    }

    get inicio(): Date {
        return _.get(this, 'data.inicio');
    }

    set inicio(value: Date) {
        _.set(this, 'data.inicio', value);
    }

    get fin(): Date {
        return _.get(this, 'data.fin');
    }

    set fin(value: Date) {
        _.set(this, 'data.fin', value);
    }
}
