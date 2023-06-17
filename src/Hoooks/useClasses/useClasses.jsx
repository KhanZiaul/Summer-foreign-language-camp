import { useQuery } from "@tanstack/react-query";

function useClasses() {
    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-seven-jet.vercel.app/classes')
            return res.json()
        }
    })
    return [classes, isLoading]
}

export default useClasses;