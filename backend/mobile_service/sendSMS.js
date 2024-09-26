import twilio from 'twilio';

const accountSid = 'AC58295fa0732b149c1e10e0a82a548c65';
const authToken = 'c7334ae454634c8b7cf819c30d3762d3';
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'EMERGENCY ALERT!!! Doctor have Problem!!!',
        from: '+13347083108',
        // to: '+918148955789'
        to: '+919787981210'
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error)); // Add a catch for error handling
