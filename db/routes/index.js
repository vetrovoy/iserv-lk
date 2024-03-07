const express = require("express");
const router = express.Router();
const {
  createSuccessResponse,
  createFailedResponse,
} = require("../utils/responseUtils.js");
const { DB_ROOT } = require("../config/config.js");

const subscrs = require("../data/subscrs/index.json");
const payments = require("../data/payments/index.json");
const charges = require("../data/charges/index.json");
const users = require("../data/users/index.json");

const routes = {
  LogOnExt: "/LogOnExt",
  GetChargesExt: "/GetChargesExt",
  GetPaymentsExt: "/GetPaymentsExt",
  GetSubscrsExt: "/GetSubscrsExt",
};

router.post(DB_ROOT + routes.LogOnExt, function (req, res, next) {
  const { Username, Password } = req.body;

  const user = users.find(
    (user) => user.Username === Username && user.Password === Password,
  );

  if (user) {
    res.send(
      createSuccessResponse({
        extToken: "00000000-0000-0000-0000-000000000000",
      }),
    );
  } else {
    res.send(createFailedResponse("Неверный логин или пароль"));
  }
});

router.post(DB_ROOT + routes.GetChargesExt, function (req, res, next) {
  const { ExtToken, PeriodBegin, PeriodEnd } = req.body;

  if (!ExtToken) {
    res.send(createFailedResponse("Повторите авторизацию"));
    return;
  }

  const periodBegin = parseInt(PeriodBegin);
  const periodEnd = parseInt(PeriodEnd);

  const filteredCharges = charges.filter(
    (item) => item.Period >= periodBegin && item.Period <= periodEnd,
  );

  res.send(createSuccessResponse({ results: filteredCharges }));
});

router.post(DB_ROOT + routes.GetPaymentsExt, function (req, res, next) {
  const { ExtToken, SubscrId, PeriodBegin, PeriodEnd } = req.body;

  if (!ExtToken) {
    res.send(createFailedResponse("Повторите авторизацию"));
    return;
  }

  const periodBegin = parseInt(PeriodBegin);
  const periodEnd = parseInt(PeriodEnd);

  const filteredPayments = payments.filter(
    (payment) =>
      payment.Period >= periodBegin &&
      payment.Period <= periodEnd &&
      payment.SubscrId === SubscrId,
  );

  res.send(createSuccessResponse({ results: filteredPayments }));
});

router.post(DB_ROOT + routes.GetSubscrsExt, function (req, res, next) {
  const { ExtToken } = req.body;

  if (ExtToken) {
    res.send(createSuccessResponse({ results: subscrs }));
  } else {
    res.send(createFailedResponse("Повторите авторизацию"));
  }
});

module.exports = router;
