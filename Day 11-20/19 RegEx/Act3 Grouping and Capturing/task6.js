//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.


const string = `john.doe@example.com
    jane.smith@fakeemail.com
    contact@dummycompany.org
    support@placeholder.net
    info@fakemail.co
    admin@tempmail.com
    feedback@sampledomain.com
    sales@mockservice.com
    user123@demomail.com
    no-reply@fakemailservice.com0`

const pattern = /[a-zA-Z0-9.-]+@[a-zA-Z0-9]+/g

const match = string.match(pattern)

console.log(match);