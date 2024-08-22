import useSWR from 'swr';
import fetcher from "@/lib/fetcher";

const useMovieList = () => {
    const { data, error, isLoading, mutate} = useSWR('/api/movies', fetcher, {
        revalidateOnError: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useMovieList;