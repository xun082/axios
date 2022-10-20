export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'patch'
  | 'PATCH'
  | 'put'
  | 'PUT'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

export interface Axios {
  request<T>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  delete<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  head<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  options<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}
