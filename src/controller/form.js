const setState = {
  fullName: {
    state: false,
  },
  email: {
    state: false,
  },
  message: {
    state: false,
  },
};

const form = () => {
  const fullName = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea');
  const btnSubmit = document.querySelector('#btnSubmit');

  checkForm(fullName, email, message, btnSubmit);
};

const checkName = (fullName) => {
  const nameValue = fullName.value;

  nameValue.length > 1
    ? fullName.parentNode.setAttribute('data-error-visible', 'false') &
      (setState.fullName.state = true)
    : fullName.parentNode.setAttribute('data-error-visible', 'true') &
      (setState.fullName.state = false);
};

const checkEmail = (email) => {
  const emailValue = email.value;
  const regex = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;

  emailValue.match(regex)
    ? email.parentNode.setAttribute('data-error-visible', 'false') &
      (setState.email.state = true)
    : email.parentNode.setAttribute('data-error-visible', 'true') &
      (setState.email.state = false);
};

const checkMessage = (message) => {
  const msgValue = message.value;

  msgValue.length > 9
    ? message.parentNode.setAttribute('data-error-visible', 'false') &
      (setState.message.state = true)
    : message.parentNode.setAttribute('data-error-visible', 'true') &
      (setState.message.state = false);
};

const checkForm = (fullName, email, message, btnSubmit) => {
  fullName.addEventListener('input', () => checkName(fullName));
  email.addEventListener('input', () => checkEmail(email));
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    checkName(fullName);
    checkMessage(message);
    checkEmail(email);
    checkState();
    return true;
  });

  const checkState = () => {
    let state = [];
    for (let object in setState) {
      let globalState = setState[object]['state'];
      state.push(globalState);
    }
    let checker = (arr) => arr.every(Boolean);

    checker(state) && sendForm();
  };
  /*
  const sendForm = () => {
    const form = document.querySelector('form');
    console.log(form);
    form.reset();
    form.submit();
  };
  */
  const sendForm = () => {
    const form = document.querySelector('form');
    form.reset();
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
  };
};
export { form };
