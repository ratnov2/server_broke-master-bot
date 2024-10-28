"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const options = {};
const getMongoConfig = async (configService) => (Object.assign({ uri: configService.get('MONGO_URI') }, options));
exports.getMongoConfig = getMongoConfig;
//# sourceMappingURL=mongo.config.js.map