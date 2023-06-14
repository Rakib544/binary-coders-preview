export const getVerifyAccountHtmlTemplate = (to: string, token: string) => {
  return `<div style="padding: 20px; border: 1px solid #f0f0f0; "><h1 style="margin: 0;margin-bottom: 30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight: 300;line-height: 1.5;
font-size: 24px;color: #294661!important;">Hello, <a href=${`mailto:${to}`} target="_blank">${to}</a>,</h1><strong>Let's create an account so you can start using Binary Coders.</strong><br><br><a style="box-sizing: border-box;border-color: #348eda;font-weight: 400;text-decoration: none;display: inline-block;margin: 0;color: #ffffff;background-color: #348eda;border: solid 1px #348eda;border-radius: 2px;font-size: 14px;padding: 12px 45px;" href=${`https://binary-coders.vercel.app/auth/register?token=${token}`} target="_blank">Register</a><p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">&nbsp;<br>
							Your link is active for 24 hours. After that, you will need to resend the registration email.</p><p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">Thank you,<br>								The Binary Coders Team</p></div>`
}

export const getResetHtmlTemplate = (to: string, token: string) => {
  return `<div style="padding: 20px; border: 1px solid #f0f0f0; "><h1 style="margin: 0;margin-bottom: 30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight: 300;line-height: 1.5;
font-size: 24px;color: #294661!important;">Hello, <a href=${`mailto:${to}`} target="_blank">${to}</a>,</h1><strong>A request has been received to change the password for your Binary Coders account.</strong><br><br><a style="box-sizing: border-box;border-color: #348eda;font-weight: 400;text-decoration: none;display: inline-block;margin: 0;color: #ffffff;background-color: #348eda;border: solid 1px #348eda;border-radius: 2px;font-size: 14px;padding: 12px 45px;" href=${`https://binary-coders.vercel.app/auth/new-password?token=${token}`} target="_blank">Reset Password</a><p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">&nbsp;<br>
							If you did not initiate this request, please contact us immediately at <a href="mailto:dpi.binarycoders@gmail.com" target="_blank">dpi.binarycoders@gmail.com</a>.  </p><p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">Thank you,<br>								The Binary Coders Team</p></div>`
}