import useSWR from 'swr';

import fetcher from "@/lib/fetcher"

const useBillboard = () => {
    const {data, error, isLoading, mutate } = useSWR('/api/random', fetcher, {
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:true,
    });
    return{
        data,
        error,
        isLoading,
        mutate
    }
}

export default useBillboard;