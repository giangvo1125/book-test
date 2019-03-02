var config = {
    development: {
        port: 2019, 
        domain: 'localhost', 
    },  
    production: {
        port: 2019, 
        domain: 'localhost', 
    },  
}
const env = process.env.NODE_ENV || 'development'

module.exports = config[env]
