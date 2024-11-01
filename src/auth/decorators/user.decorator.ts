import { createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator(
    (req, data):any => req.user,
);