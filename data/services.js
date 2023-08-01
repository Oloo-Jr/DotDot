import Service from '../models/Services';
import Fundis from '../models/Fundis';
import Quote from '../models/Quote';


export const SERVICES = [

    new Service('s1', 'Hire a Fundi', 'https://firebasestorage.googleapis.com/v0/b/rekebishaapp.appspot.com/o/iconspng%2Fgame-icons_broken-wall.png?alt=media&token=b45ee4e6-21cf-4386-9f52-112f6e652bfe'),
    new Service('s2', 'Hustler', 'https://firebasestorage.googleapis.com/v0/b/rekebishaapp.appspot.com/o/iconspng%2Ficonoir_tools.png?alt=media&token=5bedc55e-b41c-47eb-82a7-1b7c4f718cae'),
    new Service('s3', 'Hire Equipment', 'https://firebasestorage.googleapis.com/v0/b/rekebishaapp.appspot.com/o/iconspng%2Ftabler_tractor.png?alt=media&token=7c55a125-d5ae-4010-a886-4ce250418579'),
    new Service('s4', 'Buy Property','https://firebasestorage.googleapis.com/v0/b/rekebishaapp.appspot.com/o/iconspng%2Fteenyicons_search-property-outline.png?alt=media&token=101d82e4-2078-4ba0-8221-04c5a7f77e34'),
    new Service('s5', 'Request an Ambulance','https://firebasestorage.googleapis.com/v0/b/rekebishaapp.appspot.com/o/iconspng%2Ftabler_ambulance.png?alt=media&token=05bcfccd-d903-4ba6-90cd-27ed6fb33143'),
    new Service('s6', 'Contractors','https://firebasestorage.googleapis.com/v0/b/rekebishaapp.appspot.com/o/iconspng%2Ficon-park-outline_helmet-one.png?alt=media&token=2579a24b-1625-4aca-8fa1-27d351ba9176')
];

export const FUNDIS = [

    new Fundis('F1', 'John Doe', 'plumber', '79', ''),
    new Fundis('F2', 'Jane Doe', 'Electrician','65', ''),
    
];

export const QUOTE = [
    new Quote ('q1','Purchase of new sink', '2000'),
    new Quote ('q2','Labour', '600')
];


