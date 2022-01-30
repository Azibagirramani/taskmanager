const Joi = require("joi");

module.exports = validateTask = (data) => {
  let errorMessage = [];
  const JoiSchema = Joi.object({
    title: Joi.string().min(5).max(30).required(),

    links: Joi.array().optional(),
  }).options({ abortEarly: false });

  if (JoiSchema.validate(data).error) {
    JoiSchema.validate(data).error.details.forEach((errors) => {
        errorMessage.push({
            message: errors.message,
            label: errors.context.label
        });
    });
  }

  return {
    errors: errorMessage,
  };
};
