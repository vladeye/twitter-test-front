import {Tweet} from './tweet';
import {isBoolean} from "util";

describe('Tweet', () => {
  it('should create an instance', () => {
    expect(new Tweet()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const tweet = new Tweet({
      title: 'hello',
      complete: true
    });
    expect(tweet.title).toEqual('hello');
    expect(tweet.complete).toEqual('true');
  });
});
