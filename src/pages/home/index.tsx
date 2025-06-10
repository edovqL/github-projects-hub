import HomeFeatures from '@/features/home';
import { GithubProvider } from '@/features/home/store/provider';

const HomePage = () => {
    return (
        <GithubProvider>
            <HomeFeatures />
        </GithubProvider>
    );
};

export default HomePage;
