 // src/utils/validation.js
export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validateName = (name) => {
    return name.length > 2;
  };
  
