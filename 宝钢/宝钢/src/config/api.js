import request from './axios'

//调用后台数据
export function GetZLData(data) {
  return request({
    url:"Home/GetZLData2?sel=" + data,
    method:'get'
  })
}