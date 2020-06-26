//包含N个接口请求的模块
import ajax from './ajax'

//1、根据经纬度获取位置详情
export const reqAddress = (latitude,longitude)=>ajax(`http://localhost:3000/position/${latitude+','+longitude}`,{})
