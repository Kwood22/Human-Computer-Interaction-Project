import { Flight } from './flight';

export const FLIGHTS: Flight[] = [
    {
        id: 1,
        departTime: '8:00am',
        arriveTime: '9:30am',
        from: 'ORT',
        to: 'MGH',
        price: 1256
    },
    {
        id: 2,
        departTime: '16:00am',
        arriveTime: '17:30am',
        from: 'ORT',
        to: 'MGH',
        price: 1256
    },
    {
        id: 3,
        departTime: '8:00am',
        arriveTime: '9:30am',
        from: 'MGH',
        to: 'ORT',
        price: 2256
    },
    {
        id: 4,
        departTime: '16:00am',
        arriveTime: '17:30am',
        from: 'MGH',
        to: 'ORT',
        price: 1556
    },
];
