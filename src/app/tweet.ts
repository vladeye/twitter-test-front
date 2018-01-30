export class Tweet {
  id: number;
  text: string;
  username: string;
  screen_name: string;
  date: string;
  profile_image_url: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
