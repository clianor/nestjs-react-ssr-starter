import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  showHome(name: string) {
    return {
      name,
    };
  }
}
