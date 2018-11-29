import { axiosGET, axiosPOST } from 'api/axios'

export function getAlbumListJson(userid){
  const url = '/Home/AlbumListJson'
  const data = Object.assign({}, {
    userid:userid
  })
  return axiosGET(url, data)
}

export function GetUserDynamicList(userid,CurrentIndex,PageSize){
  const url = '/UserDynamic/GetUserDynamicList'
  const data = Object.assign({}, {
    userid:userid,
    CurrentIndex:CurrentIndex,
    PageSize:PageSize
  })
  return axiosPOST(url, data)
}

export function getUserTimeStamp(){
  const url = '/User/getUserTimeStamp'
  const data = Object.assign({}, {
  })
  return axiosPOST(url, data)
}

export function getUserId(md5UserTimeStampstr){
  const url = '/User/getUserId'
  const data = Object.assign({}, {
    md5UserTimeStampstr:md5UserTimeStampstr
  })
  return axiosPOST(url, data)
}

export function ExecUserDynamicAdd(userid,DynamicContent,PictureUrl){
  const url = '/UserDynamic/ExecUserDynamicAdd'
  const data = Object.assign({}, {
    userid:userid,
    DynamicContent:DynamicContent,
    PictureUrl:PictureUrl
  })
  return axiosPOST(url, data)
}

export function getCeShiJson()
{
  const url = '/Upload/123456'
  const data = Object.assign({}, {
  })
  return axiosGET(url, data)
}

