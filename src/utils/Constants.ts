const STATUS_CODE = {
  ERROR: 500, // 500
  NOT_FOUND: 404, // 404
  NO_CONTENT: 204, // 204
  SUCCESS: 200, // 200
  BAD_REQUEST: 400, // 400
  CONFLICT: 409, // conflict
  UNAUTHORIZED: 401, // 401
};

const CardDummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export { STATUS_CODE as statusCode, CardDummyArray as cardDummies };
