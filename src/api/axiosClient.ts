import axios from 'axios'

const axiosClient = axios.create();

axiosClient.interceptors.request.use(async (config: any) => {
   config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
   },
      config.data

   return config
})

axiosClient.interceptors.response.use((response: any) => {
   if (response.status === 200 && response.data) {
      return response.data
   }
   return response
},

   (error: any) => {
      throw error
   })

export default axiosClient;