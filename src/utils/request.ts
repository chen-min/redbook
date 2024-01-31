import axios, { AxiosResponse } from 'axios'
import Api from '../api/Api'

const basic = axios.create({
  baseURL: 'http://10.3.62.59:7001',
  timeout: 5000
})

export const get = (
  url:string,params:any
): Promise<AxiosResponse<any,any>> => { 
  return basic.get(url, {params})
}

export const post = (
  url:string,params:any
): Promise<AxiosResponse<any,any>> => { 
  return basic.post(url, params)
}

export const request = (
  name:string,params:any
): Promise<AxiosResponse<any,any>> => { 
  const api = (Api as any)[name]
  if (api.method === 'get') {
    return get(api.url, params)
  } else { 
    return post(api.url, params)
  }
}
