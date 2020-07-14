import { Contact } from './contact'

export interface Transfer {
    uid?: string,
    contact?: Contact,
    amount?: number,
    provId?: string,
    townId?: string,
    dispatcherEmail?: string,
    status?: string
}