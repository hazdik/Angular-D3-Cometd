import {Observable, Timestamp} from 'rxjs/Rx';
import {ArrayMatcher} from './utils/array-matcher';


/**
 * Created by QuanLe on 5/4/2017.
 */

describe('ReactiveX', () => {
  describe('#map', () => {
    it('test', (done) => {
      const values = [1, 2, 3];
      Observable.from(values)
        .flatMap(value => Observable.range(0, value))
        .count()
        .subscribe(
          response => {
            expect(response).toBe(6);
            done();
          },
          error => {
            fail(error);
            done();
          }
        );
    });
  });

  describe('#unsubscribe', () => {
    it('does not receive items any more', (done) => {
      const data: number[] = [];
      const observable = Observable.interval(100);
      const subscription = observable.subscribe(
        item => data.push(item)
      );
      Observable.timer(1000).subscribe(
        item => {
          subscription.unsubscribe();
        },
        error => {
          fail(error);
          done();
        }
      );
      Observable.timer(3000).subscribe(
        item => {
          exports(data.length).toBe(9);
          done();
        },
        error => {
          fail(error);
          done();
        }
      );
    }, 4000);
  });

  describe('#interval', () => {
    it('emit numbers from 0 every interval', (done) => {
      const list: number[] = [];
      const subscription = Observable.interval(10)
        .reduce((acc, item, index) => {
          acc.push(item);
          return acc;
        }, list)
        .subscribe();

      Observable.timer(100)
        .subscribe(
          item => {
            subscription.unsubscribe();
            const expected: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            const result = ArrayMatcher.isSame<number>(list, expected);
            if (result.result === false) {
              fail(result.error);
            }
            done();
          }
        );
    });
  });

  describe('#concatmap', () => {
    it('subscribes the next Observable after the previous Observable completes', (done) => {
      const output: Timestamp<number>[] = [];
      Observable.range(0, 2)
        .concatMap(item => Observable.timer(100))
        .timestamp()
        .subscribe(
          response => {
            output.push(response);
          },
          error => {
            fail(error);
            done();
          },
          () => {
            const eslapsedTime = output[1].timestamp - output[0].timestamp;
            expect(eslapsedTime).toBeGreaterThanOrEqual(100);
            done();
          }
        );
    });
  });
});
