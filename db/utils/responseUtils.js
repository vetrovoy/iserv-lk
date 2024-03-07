const createSuccessResponse = (data = {}) => ({
  success: true,
  ...data,
});

const createFailedResponse = (msg) => ({
  success: false,
  msg,
});

module.exports = {
  createSuccessResponse,
  createFailedResponse,
};
