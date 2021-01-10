const accountService = require('../../services/website/accountService');
const { getHttpStatusCode } = require('../../helpers/httpStatus');
const { httpErrorCode } = require('../../../constant');
const { string } = require('../../helpers/dataType');

exports.accountSignupServlet = async (req, res) => {
  const { body } = req;
  const name = string(body.name);
  const email = string(body.email);
  const password = string(body.password);
  const json = await accountService.signup(name, email, password);    
    if(json.code !== httpErrorCode.SUCCESS){
      return res.status(getHttpStatusCode(json.code)).json(json);
    }else{
      res.status(getHttpStatusCode(json.code)).json(json);
    }

  }