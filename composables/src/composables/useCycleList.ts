import {computed, ref, toRef, type Ref, type MaybeRefOrGetter} from 'vue'

export interface useCycleListConfig {
  fallback?: number,
  fallbackValue?: any
}

export const useCycleListConfigDefaults = {
  fallbackValue: undefined,
  fallbackIndex: undefined

}

export const useCycleList = <T>(list: MaybeRefOrGetter<T[]>, config?: useCycleListConfig) => {
  const activeIndex = ref(0)
  const _config = {
    ...useCycleListConfigDefaults,
    ...config
  }
  const _list = toRef(list) as Ref<T[]>
  const state = computed({
    get() {
      return _list.value[activeIndex.value]
    }, set(value) {
      const foundItem = _list.value.indexOf(value);
      if (foundItem < 0) {
        const foundItem = _list.value.indexOf(_config.fallbackValue);
        if (foundItem > -1) {
          activeIndex.value = foundItem;
          return
        }
        throw new Error(`${value} Item not found in list`)
      } else {
        activeIndex.value = foundItem;
      }
    }
  })


  function next() {
    activeIndex.value = (activeIndex.value + 1) % _list.value.length
  }

  function prev() {
    activeIndex.value = (activeIndex.value - 1 + _list.value.length) % _list.value.length
  }

  function go(index: number) {
    if (index < 0 || index >= _list.value.length) {
      if (_config.fallbackIndex !== undefined) {
        activeIndex.value = _config.fallbackIndex
        return
      }
      throw new Error('Index out of bounds')
    }
    activeIndex.value = index
  }

  return {
    state,
    prev,
    next,
    go,
  }

}