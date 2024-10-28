"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class IdValidationPipe {
    transform(val, meta) {
        if (meta.type !== 'param')
            return val;
        if (!mongoose_1.Types.ObjectId.isValid(val))
            throw new common_1.BadRequestException('Invalid format Id');
        return val;
    }
}
exports.IdValidationPipe = IdValidationPipe;
//# sourceMappingURL=id.validation.pipe.js.map