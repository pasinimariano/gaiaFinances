const emailValidator = email => {
  let regex =
    "([-!#-'*+/-9=?A-Z^-~]+(.[-!#-'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([-!#-'*+/-9=?A-Z^-~]+(.[-!#-'*+/-9=?A-Z^-~]+)*|[[\t -Z^-~]*])"

  email.match(regex) ? (response = 'Valid') : (response = 'Invalid')

  return response
}

const checkData = data => {
  let check = { email: '', password: '' }
  const { email, password } = data

  const validMail = emailValidator(email)

  !email
    ? (check.email = 'No email received')
    : validMail === 'Invalid'
    ? (check.email = 'Invalid Email')
    : (check.email = 'Ok')

  !password
    ? (check.password = 'No password received')
    : password.toString().length < 6
    ? (check.password = 'At least 6 characters are required')
    : (check.password = 'Ok')

  return check
}

module.exports = checkData
