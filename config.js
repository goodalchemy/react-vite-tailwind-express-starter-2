const STRIPE_TEST_PUBLISHABLE_KEY =
  "pk_test_51MxyjqBt35GVPUbchhvsdZQ6FJR0wLYeBkihFUD7cRaAkIN0LOZRb8tWNjz9Vni6zv0xWm53NA071GJ8SW7VqSye00FJ91lcez";
const STRIPE_TEST_SECRET_KEY =
  "sk_test_51MxyjqBt35GVPUbcgsjSepQv9YR7lgAHfDDLOgxOGx0S0hpTuw2WrqVy9Ggd6XeLeeBKNLzEqRRT0jXeN4ijoIiT001Y4HiAHD";
const STRIPE_PRODUCT_ID = "prod_RTfGDKSBeZxvbb";
const POSTGRES_CONNECTION_STRING =
  "postgresql://treasurehunt_db_user:Ulkzuja7xXf5ptxi0ErqaPwParRqMPhS@dpg-ctnk7blds78s73c5jlk0-a.oregon-postgres.render.com/treasurehunt_db";

const config = {
  STRIPE_TEST_PUBLISHABLE_KEY,
  STRIPE_TEST_SECRET_KEY,
  STRIPE_PRODUCT_ID,
  POSTGRES_CONNECTION_STRING,
  JWT_SECRET: "supersecret",
};

module.exports = config;
