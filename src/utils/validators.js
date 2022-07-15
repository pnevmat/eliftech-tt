export const nameValidator = text => {
  const result = text;

  if (result && result !== '') {
    return { value: true, message: '' };
  } else {
    return { value: false, message: 'Name field must not be empty' };
  }
};

export const emailValidator = text => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const result = emailRegex.test(text);

  if (result && text !== '') {
    return { value: result, message: '' };
  } else {
    return {
      value: result,
      message: 'Email must contain atleast @ and . symbols',
    };
  }
};

export const phoneValidator = text => {
  const phoneRegex = /^\+?\d{12}$/;
  const result = phoneRegex.test(text);

  if (result && text !== '') {
    return { value: result, message: '' };
  } else {
    return {
      value: result,
      message:
        'Phone must start with + symbol and be not shorter/longer 13 charcters',
    };
  }
};

export const addressValidator = text => {
  const result = text;

  if (result && result !== '') {
    return { value: true, message: '' };
  } else {
    return { value: false, message: 'Address field must not be empty' };
  }
};
