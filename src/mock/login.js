import { getParams } from '@/libs/util'
import qs from 'qs'

const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png',
    access: ['super_admin', 'admin', 'test'],
    permissions: [1, 2, 3, 4, 5]
  },
  admin: {
    name: 'admin',
    user_id: '2',
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
    access: ['admin'],
    permissions: [3, 4, 5]
  }
}

export const login = req => {
  // req = JSON.parse(req.body)
  console.log(req)
  req = qs.parse(req.body)
  return {
    code: 0,
    // data: {token: USER_MAP[req.userName].token},
    data: USER_MAP['super_admin'],
    msg: 'success'
  }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return {
    code: 0,
    data: USER_MAP[params.token],
    msg: 'success'
  }
}

export const logout = req => {
  return {
    code: 0,
    data: null,
    msg: 'success'
  }
}
