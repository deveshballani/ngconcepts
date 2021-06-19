import { abort } from "process";
import { from, Observable } from "rxjs";

export class AppUtils {

    public static get(url: string): Observable<any> {
        return new Observable(observer => {
            fetch(url)
                .then((res: any) => {
                    return res.json()
                })
                .then((body) => {
                    observer.next(body);
                    observer.complete();
                })
                .catch(err => {
                    observer.error(err)
                })
        })
    }

    /**
     * 
     * @param delay delay in ms
     * @param till number till this observable has to go, -1 for infinite
     */
    public static delayedStrimTill(delay: number, till: number, streamName: string = '') {
        let count = 0;
        return new Observable(observer => {
            const interval = setInterval(() => {
                count++;
                const val = streamName ? streamName + ' -> ' + count : count;
                observer.next(val);
                if (till === count) {
                    clearInterval(interval);
                    observer.complete();
                    // above statment is imp, when creating custom obsevables as most of the 
                    //operators like concat() would only start execution if the first one completed, and without this condition
                    // the obsevable wouldn't be considered completed.
                }
            }, delay)
        })
    }


    public static fakeSaveOperation(data: object) {
        return from(
            fetch('https://reqres.in/api/users/2', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
        )
    }

    public static cancellableGetRequest(url: string): Observable<any> {
        return new Observable(observer => {

            const abortController = new AbortController();
            const signal = abortController.signal;

            fetch(url, { signal })
            .then((res: any) => {
                return res.json()
            })
            .then((body) => {
                observer.next(body);
                observer.complete();
            })
            .catch(err => {
                observer.error(err)
            })

            return () => { // this returned method is going to be called by unsubscribe() method of the subscription.
                console.log(' custom unsubscription is called');
                abortController.abort();
            }
        })
    }
}