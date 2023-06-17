import { useQuery } from "@tanstack/react-query";

function useInstructors() {
    const { data : instructors = [], isLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-seven-jet.vercel.app/instructors')
            return res.json()
        }
    })
    return [instructors, isLoading]
}

export default useInstructors;