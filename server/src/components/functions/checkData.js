const emailValidator = email => {
  let regex =
    "([-!#-'*+/-9=?A-Z^-~]+(.[-!#-'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([-!#-'*+/-9=?A-Z^-~]+(.[-!#-'*+/-9=?A-Z^-~]+)*|[[\t -Z^-~]*])"

  if (!email) return undefined
  email.match(regex) ? (response = 'Valid') : (response = 'Invalid')

  return response
}

const checkData = data => {
  let check = { email: '', password: '', firstname: '', lastname: '' }
  const { email, password, firstname, lastname } = data

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

  !firstname
    ? (check.firstname = 'No firstname received')
    : firstname.length < 2
    ? (check.firstname = 'At least 2 characters are required')
    : (check.firstname = 'Ok')

  !lastname
    ? (check.lastname = 'No lastname received')
    : lastname.length < 2
    ? (check.lastname = 'At least 2 characters are required')
    : (check.lastname = 'Ok')

  return check
}

module.exports = checkData
