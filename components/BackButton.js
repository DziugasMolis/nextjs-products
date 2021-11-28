import { useRouter } from 'next/router'


const BackButton = () => {
    const router = useRouter()
    return (
        <a href="#" className="previous round" onClick={() => router.back()}>&#8249;</a>
    );
}



export default BackButton;