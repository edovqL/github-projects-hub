import Hero from '@/components/Hero';
import SearchBox from '@/components/SearchBox';
import { LIMIT_DATA } from '@/constants/configs';
import Catalog from '@/features/home/sections/Catalog';
import { isEmpty } from '@/helpers/validation';
import useQueryParams from '@/hooks/useQueryParams';

import Filter from './components/Filter';
import { useGithubContext } from './store/context';

const HomeFeatures = () => {
    const { state, onRefetchUsers, isLoading } = useGithubContext();
    const { getQueryParams, setQueryParams, resetQueryParams } = useQueryParams();

    const options: number[] = [5, 10, 20, 50];

    const params = getQueryParams();

    if (!state) {
        return null;
    }

    return (
        <div className="h-full bg-[#ffffff] py-6 px-8 flex flex-col gap-6 w-full max-w-[1440px] shadow-md rounded-md overflow-y-auto scrollbar-thin">
            <Hero />
            <div
                className="flex flex-col gap-3"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onRefetchUsers();
                    }
                }}
            >
                <div className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-11">
                        <SearchBox
                            value={params.search}
                            handleSearch={(value) => setQueryParams({ search: value })}
                            handleClear={resetQueryParams}
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="col-span-1">
                        <Filter
                            options={options}
                            selectedOption={params.limit ?? LIMIT_DATA}
                            onChange={(value) => {
                                setQueryParams({ limit: value });
                            }}
                        />
                    </div>
                </div>
                <button
                    className="w-full py-1.5 bg-[#2c9cdb] disabled:bg-gray-300 disabled:text-[#989898] text-[14px] text-white rounded-sm"
                    onClick={onRefetchUsers}
                    disabled={isLoading || !params.search}
                >
                    {isLoading ? 'Loading...' : 'Search'}
                </button>
            </div>

            {!isEmpty(params.search) && !isEmpty(state.repositories) && <span>Showing users for &quot;{params.search}&quot;</span>}

            <Catalog datas={state.repositories ?? state.users} isLoading={isLoading} />
        </div>
    );
};

export default HomeFeatures;
