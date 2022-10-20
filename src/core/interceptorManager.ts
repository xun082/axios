import { ResolvedFn, RejectFn } from './../types/index'

interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectFn
}

export default class InterceptorManager<T> {
  private interceptor: Array<Interceptor<T> | null>

  constructor() {
    this.interceptor = []
  }

  use(resolved: ResolvedFn<T>, rejected?: RejectFn): number {
    this.interceptor.push({
      resolved,
      rejected
    })
    return this.interceptor.length - 1
  }

  forEach(fn: (Interceptor: Interceptor<T>) => void): void {
    this.interceptor.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  eject(id: number): void {
    if (this.interceptor[id]) {
      this.interceptor[id] = null
    }
  }
}
