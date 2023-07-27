class Time {

    lang: string;

    constructor(lang: string) {
        this.lang = lang;
    }
    
    elapsedTime(date: string) {
        
        const time: string = date.split('.')[0];
        const now: Date = new Date();
        const old: Date = new Date(time);
        const milliseconds:number = now.getTime() - old.getTime();
        let text:string = "";
    
        const years: number = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 366));
        const months: number = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 30.5));
        const weeks: number = Math.floor(milliseconds  / (1000 * 60 * 60 * 24 * 7));
        const days: number = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes: number = Math.floor(milliseconds / (1000 * 60));
        const seconds: number = Math.floor(milliseconds / 1000);
        
        interface ElapseObject {
            [key: string]: () => void;
        }

        const elapse: ElapseObject  = {
            'en': () => {
                if (years > 0)  text = years + `${years > 1 ? ' years' : ' year'}`;
                else if (months > 0)  text = months +  `${months > 1 ? ' months' : ' month'}`;
                else if (weeks > 0)  text = weeks +  `${weeks > 1 ? ' weeks' : ' week'}`;
                else if (days > 0)  text = days +  `${days > 1 ? ' days' : ' day'}`;
                else if (hours > 0)  text = hours +  `${hours > 1 ? ' hours' : ' hour'}`;
                else if (minutes > 0)  text = minutes +  `${minutes > 1 ? ' minutes' : ' minute'}`;
                else if (seconds > 0) text = seconds +  `${seconds > 1 ? ' seconds' : ' second'}`;
                text += " before";
            },
            'ru': () => {
                if (years > 0)  text = years + `${years > 1 ? ' годы' : ' год'}`;
                else if (months > 0)  text = months +  `${months > 1 ? ' месяцы' : ' месяц'}`;
                else if (weeks > 0)  text = weeks +  `${weeks > 1 ? ' недели' : ' неделя'}`;
                else if (days > 0)  text = days +  `${days > 1 ? ' дни' : ' день'}`;
                else if (hours > 0)  text = hours +  `${hours > 1 ? ' часы' : ' час'}`;
                else if (minutes > 0)  text = minutes +  `${minutes > 1 ? ' минуты' : ' минута'}`;
                else if (seconds > 0) text = seconds +  `${seconds > 1 ? ' секунды' : ' секунда'}`;
                text += " назад";
            },
            'az': () => {
                if (years > 0)  text = years + " il";
                else if (months > 0)  text = months + " ay";
                else if (weeks > 0)  text = weeks + " həftə";
                else if (days > 0)  text = days + " gün";
                else if (hours > 0)  text = hours + " saat";
                else if (minutes > 0)  text = minutes + " dəqiqə";
                else if (seconds > 0) text = seconds + " saniyə";
                text += " öncə";
            }
        }

        elapse[this.lang]();
    
        return text;

    }
    
}

export default Time;
