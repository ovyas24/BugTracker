
const isValid = (schema, data) => {
    const { value, error } = schema.validate(data);
    if(error) return { isValid: false, message: error.details.map(detail => detail.message) }
    return { isValid: true, data: value };
}

module.exports = isValid