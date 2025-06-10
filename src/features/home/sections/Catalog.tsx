import { FC } from 'react';

import Card from '@/features/home/components/Card';
import { CatalogProps } from '@/features/home/sections/types';

const Catalog: FC<CatalogProps> = ({ datas, isLoading }) => {
    if (isLoading)
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-1">
                {new Array(12).fill(0).map((_, index) => (
                    <div key={`skeleton-${index}`} className="lg:pb-10">
                        <Card data={{}} isLoading={true} />
                    </div>
                ))}
            </div>
        );

    return (
        <div className="mt-1">
            {datas?.length > 0 && (
                <div className="h-screen flex flex-col">
                    <div className="flex-grow flex flex-col gap-2">
                        <div className={`grid ${datas && datas.length > 1 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-8 mt-1`}>
                            {datas?.map((data, idx) => {
                                const key = typeof (data as any).slug === 'string' ? (data as any).slug : idx;
                                return <Card key={`card-${key}`} data={data} isLoading={false} />;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Catalog;
