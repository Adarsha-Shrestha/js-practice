const zod = require('zod');

const usernameSchema = zod.string().email();
const passwordSchema = zod
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
  .regex(/\d/, { message: "Password must contain at least one number." })
  .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character." });

module.exports = {
    usernameSchema,
    passwordSchema
};