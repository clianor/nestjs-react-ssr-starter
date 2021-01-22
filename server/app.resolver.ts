import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  constructor() {}

  @Query(() => String)
  helloWorld() {
    return 'hello world';
  }
}
