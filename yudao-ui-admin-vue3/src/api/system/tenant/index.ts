import request from '@/config/axios'
import type { TenantVO } from './types'

// 查询租户列表
export const getTenantPageApi = (params) => {
  return request.get({ url: '/system/tenant/page', params })
}

// 查询租户详情
export const getTenantApi = (id: number) => {
  return request.get({ url: '/system/tenant/get?id=' + id })
}

// 新增租户
export const createTenantApi = (data: TenantVO) => {
  return request.post({ url: '/system/tenant/create', data })
}

// 修改租户
export const updateTenantApi = (data: TenantVO) => {
  return request.put({ url: '/system/tenant/update', data })
}

// 删除租户
export const deleteTenantApi = (id: number) => {
  return request.delete({ url: '/system/tenant/delete?id=' + id })
}

// 导出租户
export const exportTenantApi = (params) => {
  return request.download({ url: '/system/tenant/export-excel', params })
}
