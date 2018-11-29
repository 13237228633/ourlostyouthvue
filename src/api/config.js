export const ERR_OK = 0
export const ERR_NONEXIST = 404
export let HOST = ''

if(process.env.NODE_ENV ===  'development'){
  // HOST = '/api'
    HOST = 'http://localhost:56572'
  
  console.log(process.env.NODE_ENV)
}else{
  //正式
  HOST = 'http://116.196.118.203:8081'
}