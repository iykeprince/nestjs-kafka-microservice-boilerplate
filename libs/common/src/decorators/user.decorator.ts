

// import { createParamDecorator, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
// import { User } from 'src/entities/user.entity';
// import { getRepository } from 'typeorm';

// /**
//  * retrieve the current user with a decorator
//  * example of a controller method:
//  * @Post()
//  * someMethod(@CurrentUser() user: User) {
//  *   // do something with the user
//  * }
//  */
// export const CurrentUser = createParamDecorator(async (data: unknown, ctx: ExecutionContext) => {
//   const request = ctx.switchToHttp().getRequest();
//   const authenticatedUser = request.user;
//   const userObject = await getRepository(User).findOne(authenticatedUser.id);
//   if (!userObject) throw new ForbiddenException('User not found!!');
//   return userObject;
// });