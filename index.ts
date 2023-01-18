import { interval, Observable, timer } from 'rxjs';

console.log('App started');

const interval$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const timeoutId = setInterval(() => {
    console.log('Timeout!');
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(timeoutId);
});

const subscription = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
}, 5000);
