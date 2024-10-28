import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class IdValidationPipe implements PipeTransform {
    transform(val: string, meta: ArgumentMetadata): string;
}
