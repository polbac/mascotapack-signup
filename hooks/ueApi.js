import { useEffect, useCallback, useState } from 'react'

const mockApi = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve({
        items: [
            {
                item_name: 'Eukanuba 15 kls',
                price: 3000,
                photo: 'https://cdn.shopify.com/s/files/1/0370/1823/9113/products/AdultoecommerceMB_400x.png?v=1587501043'
            },
            {
                item_name: 'Bolsas sanitarias',
                price: 500,
                photo: 'https://puppis.vteximg.com.br/arquivos/ids/158242-600-600/200023.jpg?v=635981360015630000'
            },
        ],
        total: 3500,
        duration_in_months: 1
    }), 2000)
})

export function useApi() {
    const [data, dataSet] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchMyAPI = useCallback(async () => {
        let response = await mockApi()
        response = response
        dataSet(response)
        setLoading(false)
      }, [])
    
      useEffect(() => {
        fetchMyAPI()
      }, [fetchMyAPI])

    return {
        loading,
        error,
        data,
    }
}