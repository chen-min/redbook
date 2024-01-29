import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key:string, value:string) => { 
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (e) { 
    console.error(e)
  }

}

export const load = async (key:string) => { 
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) { 
    console.error(e)
  }
}

export const remove = async (key:string) => { 
  try {
    return await AsyncStorage.removeItem(key)
  } catch (e) { 
    console.error(e)
  }
}

export const clear = async (key:string) => { 
  try {
    AsyncStorage.clear()
  } catch (e) { 
    console.error(e)
  }
}


