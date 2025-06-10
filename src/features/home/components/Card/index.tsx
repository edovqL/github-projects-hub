import { FC, useState } from 'react';

import Accordion from '@/components/Accordion';
import CardLoader from '@/features/home/components/Card/Loader';
import { CardProps } from '@/features/home/components/Card/types';
import { truncateText } from '@/helpers/string';
import useQueryParams from '@/hooks/useQueryParams';

import Preview from '../Preview';

const Card: FC<CardProps> = ({ data, isLoading }) => {
    const { setQueryParams } = useQueryParams();
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    if (isLoading) return <CardLoader />;

    return (
        <Accordion
            title={data?.username ?? '-'}
            content={
                <>
                    {data?.repositories && data?.repositories?.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {data?.repositories?.map((repo, index: number) => (
                                <div key={index} className="flex flex-col p-3 h-fit bg-[#e0e0e0] rounded-sm">
                                    <div
                                        className="flex flex-row justify-between flex-wrap"
                                        onClick={() => setQueryParams({ username: repo.owner.login, repo: repo.name })}
                                    >
                                        <span className="text-[#000000] font-bold text-[18px] break-words">{repo.name}</span>
                                        <button
                                            className="text-[#000000] text-[14px] hover:cursor-pointer"
                                            onClick={() => {
                                                setQueryParams({ username: repo.owner.login, repo: repo.name });
                                                setOpen((open) => !open);
                                            }}
                                        >
                                            View Readme
                                        </button>
                                        <Preview open={open} onClose={closeModal} />
                                    </div>
                                    <span className="text-[#000000] text-[15px] mt-1 break-words">{truncateText(repo.description, 150)}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <span className="text-[#000000]">No repositories found</span>
                    )}
                </>
            }
        />
    );
};

export default Card;
